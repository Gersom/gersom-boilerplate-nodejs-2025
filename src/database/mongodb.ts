import { connect } from 'mongoose'
import { env } from '#config/env/index.js'

export const connectMongoDB = async (): Promise<void> => {
  try {
    let databaseURI = env.DB_URI

    if (!databaseURI || !env.DB_USER || !env.DB_PASSWORD || !env.DB_NAME) {
      throw new Error('Missing required database environment variables')
    }

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