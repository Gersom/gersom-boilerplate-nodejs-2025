const { Router } = require('express')
const { asyncHandler } = require('@middleware/asyncHandler')
const { validateRegister } = require('./user.validation')
const UserController = require('./user.controller')

const router = Router()

router.get('/',
  asyncHandler(UserController.getAllUsers))

router.get('/:id',
  asyncHandler(UserController.getUser))

router.post('/',
  validateRegister,
  asyncHandler(UserController.createUser))

router.patch('/:id',
  asyncHandler(UserController.updateUser))

router.delete('/:id',
  asyncHandler(UserController.deleteUser))

module.exports = router