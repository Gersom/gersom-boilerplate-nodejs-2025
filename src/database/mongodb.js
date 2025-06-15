import { connect } from 'mongoose'
import { env } from '#config/env.js'

export const connectMongoDB = async () => {
  try {
    let databaseURI = env.DB_URI
    databaseURI = databaseURI.replace('<username>', env.DB_USER)
    databaseURI = databaseURI.replace('<password>', env.DB_PASSWORD)
    databaseURI = databaseURI.replace('<database>', env.DB_NAME)

    const conn = await connect(databaseURI)
    console.log(`* MongoDB Connected: ${conn.connection.host} ✅`)
  } catch (error) {
    console.log('Error connecting to MongoDB')
    console.error(error)
    process.exit(1)
  }
}

