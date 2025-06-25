import { Schema, Model } from 'mongoose'

export const addMethods = <T>(scheme: Schema<T>): void => {
  // Find Data
  scheme.static('findAllData', function (this: Model<T>) {
    return this.find({})
  })
  
  scheme.static('findDataByFilter', function (this: Model<T>, filter: object = {}) {
    return this.find(filter)
  })
  
  scheme.static('findDataById', function (this: Model<T>, _id: string) {
    return this.findById(_id)
  })
  
  scheme.static('findOneData', function (this: Model<T>, filter: object = {}) {
    return this.findOne(filter)
  })

  // Data Exist
  scheme.static('dataExist', function (this: Model<T>) {
    return this.exists({})
  })

  // Update Data
  scheme.static('updateDataById', function (this: Model<T>, _id: string, body: Partial<T>) {
    return this.findOneAndUpdate({ _id }, body)
  })
  
  scheme.static('updateDataByFilter', function (this: Model<T>, filter: object, body: Partial<T>) {
    return this.findOneAndUpdate(filter, body)
  })

  // Remove Data
  scheme.static('removeDataById', function (this: Model<T>, _id: string) {
    return this.deleteOne({ _id })
  })
  
  scheme.static('removeDataByFilter', function (this: Model<T>, filter: object) {
    return this.deleteMany(filter)
  })

  // Create Data
  scheme.static('createData', function (this: Model<T>, data: Partial<T> = {}) {
    return this.create(data)
  })
  
  scheme.static('createManyData', function (this: Model<T>, data: Partial<T>[] = []) {
    return this.insertMany(data)
  })
}