import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const recurringMovementSchema = new Schema({
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
  },
  reminder: {
    type: String,
    required: false,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
recurringMovementSchema.index({ userId: 1 })
recurringMovementSchema.index({ paymentMethodId: 1 })
recurringMovementSchema.index({ type: 1 })

// Agregar métodos estáticos
addMethods(recurringMovementSchema)

export default model('recurring_movements', recurringMovementSchema)