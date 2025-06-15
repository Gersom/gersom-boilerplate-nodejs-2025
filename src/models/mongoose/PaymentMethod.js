import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const paymentMethodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  currency: {
    type: String,
    required: true,
    trim: true,
    default: 'USD'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
paymentMethodSchema.index({ userId: 1 })
paymentMethodSchema.index({ name: 1 })

// Agregar métodos estáticos
addMethods(paymentMethodSchema)

export default model('payment_methods', paymentMethodSchema)