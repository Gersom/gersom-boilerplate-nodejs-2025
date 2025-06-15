import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const movementTagSchema = new Schema({
  movementId: {
    type: Schema.Types.ObjectId,
    ref: 'movements',
    required: true
  },
  tagId: {
    type: Schema.Types.ObjectId,
    ref: 'tags',
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
movementTagSchema.index({ movementId: 1 })
movementTagSchema.index({ tagId: 1 })
movementTagSchema.index({ movementId: 1, tagId: 1 }, { unique: true })

// Agregar métodos estáticos
addMethods(movementTagSchema)

export default model('movement_tags', movementTagSchema)