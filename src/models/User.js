const { Schema, model } = require('mongoose')
const addMethods = require('./utils/addStaticMethods')

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
  whatsapp: {
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
  },
  profilePic: {
    type: String,
    required: false,
    trim: true
  },
  selectedAccountId: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: false
  }
}, {
  timestamps: true,
  versionKey: false
})

// Índices para mejorar el rendimiento de las consultas
userSchema.index({ email: 1 }, { unique: true })
userSchema.index({ name: 1 })

// Agregar métodos estáticos
addMethods(userSchema)

module.exports = model('User', userSchema)