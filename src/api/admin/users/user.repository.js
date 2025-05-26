import { User } from '#models/mongoose/index.js'

const findAll = async () => {
  return await User.findAllData()
}

const findById = async (id) => {
  return await User.findDataById(id)
}

const create = async (data) => {
  return await User.createData(data)
}

const update = async (id, data) => {
  return await User.updateDataById(id, data)
}

const deleteById = async (id) => {
  return await User.removeDataById(id)
}

export default {
  findAll,
  findById,
  create,
  update,
  delete: deleteById
}
