export const addMethods = (scheme) => {
  // Find Data
  scheme.static('findAllData', function () {
    return this.find({})
  })
  scheme.static('findDataByFilter', function (filter = {}) {
    return this.find(filter)
  })
  scheme.static('findDataById', function (_id) {
    return this.findById(_id)
  })
  scheme.static('findOneData', function (filter = {}) {
    return this.findOne(filter)
  })

  // Data Exist
  scheme.static('dataExist', function () {
    return this.exists({})
  })

  // Update Data
  scheme.static('updateDataById', function (_id, body) {
    return this.findOneAndUpdate({ _id }, body)
  })
  scheme.static('updateDataByFilter', function (filter, body) {
    return this.findOneAndUpdate(filter, body)
  })

  // Remove Data
  scheme.static('removeDataById', function (_id) {
    return this.deleteOne({ _id })
  })
  scheme.static('removeDataByFilter', function (filter) {
    return this.deleteMany(filter)
  })

  // Create Data
  scheme.static('createData', function (data = {}) {
    return this.create(data)
  })
  scheme.static('createManyData', function (data = []) {
    return this.insertMany(data)
  })
}