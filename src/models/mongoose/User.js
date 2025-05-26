import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user'
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
userSchema.index({ name: 1 })
userSchema.index({ role: 1 })

// Agregar métodos estáticos
addMethods(userSchema)

export default model('users', userSchema)