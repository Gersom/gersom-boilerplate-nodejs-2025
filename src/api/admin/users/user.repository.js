export default class UserRepository {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  findAll = async () => {
    return await this.userModel.findAllData()
  }

  findById = async (id) => {
    return await this.userModel.findDataById(id)
  }

  create = async (data) => {
    return await this.userModel.createData(data)
  }

  update = async (id, data) => {
    return await this.userModel.updateDataById(id, data)
  }

  deleteById = async (id) => {
    return await this.userModel.removeDataById(id)
  }
}
