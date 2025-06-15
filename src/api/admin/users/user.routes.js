import { Router } from 'express'
import UserController from './user.controller.js'
import { validateCreateUser, validateUpdateUser } from './user.validation.js'

export const createUserRouter = ({ models }) => {
  const router = Router()

  const userController = new UserController({ models })

  router.get('/', userController.getAllUsers)
  router.get('/:id', userController.getUserById)
  router.post('/', validateCreateUser, userController.createUser)
  router.put('/:id', validateUpdateUser, userController.updateUser)
  router.delete('/:id', userController.deleteUser)

  return router
}
