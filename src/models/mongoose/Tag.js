import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
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
tagSchema.index({ userId: 1 })
tagSchema.index({ name: 1 })
tagSchema.index({ userId: 1, name: 1 }, { unique: true })

// Agregar métodos estáticos
addMethods(tagSchema)

export default model('tags', tagSchema)