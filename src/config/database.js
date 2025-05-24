const { connect } = require('mongoose')
const { db } = require('./env.js')

const connectDatabase = async () => {
  try {
    let databaseURI = db.uri
    databaseURI = databaseURI.replace('<username>', db.user)
    databaseURI = databaseURI.replace('<password>', db.password)
    databaseURI = databaseURI.replace('<database>', db.name)

    const conn = await connect(databaseURI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log('Error connecting to MongoDB')
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDatabase
