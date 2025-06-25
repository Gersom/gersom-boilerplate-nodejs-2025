import { Schema, model } from 'mongoose'
import { addMethods } from '../utils/addStaticMethods.js'
import { IStaticsMethods } from '../../typeMethods.js'

export interface IUser extends Document {
  _id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
  whatsapp?: string
  imageUrl?: string
  isEmailVerified: boolean
  isWhatsappVerified: boolean
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>({
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
  },
  whatsapp: {
    type: String,
    required: false,
    trim: true
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isWhatsappVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
userSchema.index({ name: 1 })
userSchema.index({ role: 1 })

// Agregar métodos estáticos
addMethods<IUser>(userSchema)

export default model<IUser, IStaticsMethods<IUser>>('users', userSchema)