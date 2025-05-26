import userRepository from './user.repository.js'
import { NotFoundError } from '#utils/apiErrors.js'
import asyncHandler from '#middleware/asyncHandler.js'
import { responseSuccess } from '#utils/apiSuccess.js'

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userRepository.findAll()
  responseSuccess(res, 200, 'Users retrieved successfully', users)
})

const getUserById = asyncHandler(async (req, res) => {
  const user = await userRepository.findById(req.params.id)
  if (!user) {
    throw new NotFoundError('User not found')
  }
  responseSuccess(res, 200, 'User retrieved successfully', user)
})

const createUser = asyncHandler(async (req, res) => {
  const user = await userRepository.create(req.body)
  responseSuccess(res, 201, 'User created successfully', { id: user?.id || user?._id })
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await userRepository.update(req.params.id, req.body)
  if (!user) {
    throw new NotFoundError('User not found')
  }
  responseSuccess(res, 200, 'User updated successfully')
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await userRepository.delete(req.params.id)
  if (!user) {
    throw new NotFoundError('User not found')
  }
  responseSuccess(res, 204, 'User deleted successfully')
})

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}