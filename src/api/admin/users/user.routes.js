import express from 'express'
import userController from './user.controller.js'
import { validateCreateUser, validateUpdateUser } from './user.validation.js'

const router = express.Router()

// Get all users
router.get('/', userController.getAllUsers)

// Get a single user by ID
router.get('/:id', userController.getUserById)

// Create a new user
router.post('/', validateCreateUser, userController.createUser)

// Update a user
router.put('/:id', validateUpdateUser, userController.updateUser)

// Delete a user
router.delete('/:id', userController.deleteUser)

export default router