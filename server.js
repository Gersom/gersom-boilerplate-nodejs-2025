import { db, initEnv } from '#config/env.js'
import { createApp } from '#src/app.js'
import { printAuthor } from '#utils/author.js'

import { connectMongoDB } from '#database/mongodb.js'
import { connectMySQL } from '#database/mysql.js'
import { connectPostgreSQL } from '#database/postgresql.js'

import mongooseModel from '#models/mongoose/index.js'
import sequelizeModel from '#models/sequelize/index.js'
import typeormModel from '#models/typeorm/index.js'

const createServer = async () => {
  // Print author information
  printAuthor()

  // Initialize environment
  initEnv()

  if (db.type === 'mongodb') {
    await connectMongoDB()
    await createApp({ models: mongooseModel })
  } else if (db.type === 'mysql') {
    await connectMySQL()
    await createApp({ models: sequelizeModel })
  } else if (db.type === 'postgresql') {
    await connectPostgreSQL()
    await createApp({ models: typeormModel })
  }
}

createServer()