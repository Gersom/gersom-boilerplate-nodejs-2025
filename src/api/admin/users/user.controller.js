import UserRepository from './user.repository.js'
import asyncHandler from '#middleware/asyncHandler.js'
import { NotFoundError } from '#utils/apiErrors.js'
import { responseSuccess } from '#utils/apiSuccess.js'

export default class UserController {
  constructor ({ models }) {
    this.userRepository = new UserRepository({ userModel: models.User })
  }

  getAllUsers = asyncHandler(async (req, res) => {
    const users = await this.userRepository.findAll()
    responseSuccess(res, 200, 'Users retrieved successfully', users)
  })

  getUserById = asyncHandler(async (req, res) => {
    const user = await this.userRepository.findById(req.params.id)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    responseSuccess(res, 200, 'User retrieved successfully', user)
  })

  createUser = asyncHandler(async (req, res) => {
    const user = await this.userRepository.create(req.body)
    responseSuccess(res, 201, 'User created successfully', { id: user?.id || user?._id })
  })

  updateUser = asyncHandler(async (req, res) => {
    const user = await this.userRepository.update(req.params.id, req.body)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    responseSuccess(res, 200, 'User updated successfully')
  })

  deleteUser = asyncHandler(async (req, res) => {
    const user = await this.userRepository.deleteById(req.params.id)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    responseSuccess(res, 204, 'User deleted successfully')
  })
}
