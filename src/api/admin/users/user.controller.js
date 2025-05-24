const UserRepository = require('./user.repository')
const { responseSuccess } = require('@utils/apiSuccess')

const UserController = {

  async getAllUsers (_, res) {
    const result = await UserRepository.getAllUsers()
    res
      .status(200)
      .json(responseSuccess('Users retrieved successfully', result))
  },

  async getUser (req, res) {
    const { id } = req.params

    const result = await UserRepository.getUser(id)
    res
      .status(200)
      .json(responseSuccess('User retrieved successfully', result))
  },

  async createUser (req, res) {
    const result = await UserRepository.createUser(req.body)
    res
      .status(200)
      .json(responseSuccess('User created successfully', result))
  },

  async updateUser (req, res) {
    const { id } = req.params
    await UserRepository.updateUser(id, req.body)
    res
      .status(200)
      .json(responseSuccess('User updated successfully'))
  },

  async deleteUser (req, res) {
    const { id } = req.params
    await UserRepository.deleteUser(id)
    res
      .status(200)
      .json(responseSuccess('User deleted successfully'))
  }
}

module.exports = UserController