// const { UserModel } = require('@models')
const { DataError } = require('@utils/apiErrors')

const UserService = {
  async getAllUsers () {
    // const users = await UserModel.findAllData()
    const users = [{ test: 'test' }]
    return { data: users }
  },

  async getUser (id) {
    // const user = await UserModel.findDataById(id)
    const user = { test: 'test' }

    if (!user) {
      throw new DataError('NOT_FOUND', `User with id ${id} not found`)
    }

    return { data: user }
  },

  async createUser (data) {
    // const user = await UserModel.createData(data)
    const user = { id: 1 }
    return { data: { id: user.id } }
  },

  async updateUser (id, data) {
    // await UserModel.updateData(id, data)
    return true
  },

  async deleteUser (id) {
    // await UserModel.removeData(id)
    return true
  }
}

module.exports = UserService
