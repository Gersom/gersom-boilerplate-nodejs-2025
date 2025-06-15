import { Schema, model } from 'mongoose'
import { addMethods } from './utils/addStaticMethods.js'

const recurringMovementTagSchema = new Schema({
  recurringMovementId: {
    type: Schema.Types.ObjectId,
    ref: 'recurring_movements',
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
recurringMovementTagSchema.index({ recurringMovementId: 1 })
recurringMovementTagSchema.index({ tagId: 1 })
recurringMovementTagSchema.index({ recurringMovementId: 1, tagId: 1 }, { unique: true })

// Agregar métodos estáticos
addMethods(recurringMovementTagSchema)

export default model('recurring_movement_tags', recurringMovementTagSchema)