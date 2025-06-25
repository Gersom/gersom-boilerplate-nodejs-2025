import { env, initEnv } from '#config/env/index.js'
import type { DatabaseType } from '#config/env/types.js'
import { createApp } from '#src/app.js'
import { printAuthor } from '#utils/author.js'

import { connectMongoDB } from '#database/mongodb.js'
import type { IModels as IMongoModels } from '#models/mongoose/index.js'
import { connectMySQL } from '#database/mysql.js'
import type { IModels as ISequelizeModels } from '#models/sequelize/index.js'
import { connectPostgreSQL } from '#database/postgresql.js'
import type { IModels as ITypeormModels } from '#models/typeorm/index.js'

import mongooseModel from '#models/mongoose/index.js'
import sequelizeModel from '#models/sequelize/index.js'
import typeormModel from '#models/typeorm/index.js'

interface DatabaseConfig {
  type: DatabaseType
  connect: () => Promise<void>
  models: IMongoModels | ISequelizeModels | ITypeormModels // You should replace 'any' with specific model types
}

const createServer = async (): Promise<void> => {
  try {
    // Print author information
    await printAuthor()

    // Initialize environment
    await initEnv()

    const dbType = env.DB_TYPE as DatabaseType

    // Database configuration mapping
    const databaseConfigs: Record<DatabaseType, DatabaseConfig> = {
      mongodb: {
        type: 'mongodb',
        connect: connectMongoDB,
        models: mongooseModel as IMongoModels
      },
      mysql: {
        type: 'mysql',
        connect: connectMySQL,
        models: sequelizeModel as ISequelizeModels
      },
      postgresql: {
        type: 'postgresql',
        connect: connectPostgreSQL,
        models: typeormModel as ITypeormModels
      }
    }

    // Get database configuration
    const dbConfig = databaseConfigs[dbType]

    // Connect to database
    await dbConfig.connect()

    // Create and start application
    await createApp({ models: dbConfig.models })

  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: unknown, promise: Promise<any>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error)
  process.exit(1)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully...')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully...')
  process.exit(0)
})

createServer()