import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const movementSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxlength: 1000
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['income', 'expense']
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  paymentMethodId: {
    type: Schema.Types.ObjectId,
    ref: 'payment_methods',
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
movementSchema.index({ userId: 1 })
movementSchema.index({ paymentMethodId: 1 })
movementSchema.index({ type: 1 })
movementSchema.index({ createdAt: -1 })

// Agregar métodos estáticos
addMethods(movementSchema)

export default model('movements', movementSchema)