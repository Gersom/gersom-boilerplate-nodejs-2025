import { IStaticsMethods } from '#models/typeMethods.js'

interface UserRepositoryConfig<T> {
  userModel: IStaticsMethods<T>
}

export default class UserRepository<T> {
  private readonly userModel: IStaticsMethods<T>

  constructor({ userModel }: UserRepositoryConfig<T>) {
    this.userModel = userModel
  }

  findAll = async (): Promise<any[]> => {
    return await this.userModel.findAllData()
  }

  findById = async (id: string): Promise<any> => {
    return await this.userModel.findDataById(id)
  }

  create = async (data: object): Promise<any> => {
    return await this.userModel.createData(data)
  }

  update = async (id: string, data: object): Promise<any> => {
    return await this.userModel.updateDataById(id, data)
  }

  deleteById = async (id: string): Promise<any> => {
    return await this.userModel.removeDataById(id)
  }
}