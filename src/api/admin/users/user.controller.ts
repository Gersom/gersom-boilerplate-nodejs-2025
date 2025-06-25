import { Request, Response } from 'express'
import UserRepository from './user.repository.js'
import asyncHandler from '#middleware/asyncHandler.js'
import { NotFoundError } from '#utils/apiErrors.js'
import { responseSuccess } from '#utils/apiSuccess.js'
import { IStaticsMethods } from '#models/typeMethods.js'

interface UserControllerConfig<T> {
  models: {
    User: IStaticsMethods<T>
    // Add other models here as needed
  }
}

// Extend Express Request interface to include typed params
interface UserRequest extends Request {
  params: {
    id?: string
    [key: string]: string
  }
}

export default class UserController<T> {
  private readonly userRepository: UserRepository<T>

  constructor({ models }: UserControllerConfig<T>) {
    this.userRepository = new UserRepository({ userModel: models.User })
  }

  getAllUsers = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const users = await this.userRepository.findAll()
    responseSuccess(res, 200, 'Users retrieved successfully', users)
  })

  getUserById = asyncHandler(async (req: UserRequest, res: Response): Promise<void> => {
    const user = await this.userRepository.findById(req.params.id)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    responseSuccess(res, 200, 'User retrieved successfully', user)
  })

  createUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const user = await this.userRepository.create(req.body)
    responseSuccess(res, 201, 'User created successfully', { id: user?.id || user?._id })
  })

  updateUser = asyncHandler(async (req: UserRequest, res: Response): Promise<void> => {
    const user = await this.userRepository.update(req.params.id, req.body)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    responseSuccess(res, 200, 'User updated successfully')
  })

  deleteUser = asyncHandler(async (req: UserRequest, res: Response): Promise<void> => {
    const user = await this.userRepository.deleteById(req.params.id)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    responseSuccess(res, 204, 'User deleted successfully')
  })
}