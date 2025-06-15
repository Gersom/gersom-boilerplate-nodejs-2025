import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const recoveryCodeSchema = new Schema({
  code: {
    type: String,
    required: true,
    trim: true
  },
  expiresAt: {
    type: Date,
    required: true
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
recoveryCodeSchema.index({ userId: 1 })
recoveryCodeSchema.index({ code: 1 })
recoveryCodeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

// Agregar métodos estáticos
addMethods(recoveryCodeSchema)

export default model('recovery_codes', recoveryCodeSchema)