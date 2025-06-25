import { z } from 'zod/v4'
import { Request, Response, NextFunction } from 'express'
import { InvalidInputError } from '#utils/apiErrors.js'

// Define schemas
const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['user', 'admin']).default('user'),
  whatsapp: z.string().default(''),
  imageUrl: z.string().default(''),
  isEmailVerified: z.boolean().default(false),
  isWhatsappVerified: z.boolean().default(false)
})

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  role: z.enum(['user', 'admin']).optional(),
  whatsapp: z.string().optional(),
  imageUrl: z.string().optional(),
  isEmailVerified: z.boolean().optional(),
  isWhatsappVerified: z.boolean().optional()
}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be provided'
})

// Type definitions from schemas
export type CreateUserData = z.infer<typeof createUserSchema>
export type UpdateUserData = z.infer<typeof updateUserSchema>

// Transform functions for lowercase conversion
const transformUserData = (data: CreateUserData | UpdateUserData): CreateUserData | UpdateUserData => {
  const transformed = { ...data }
  if ('name' in transformed && transformed.name) {
    transformed.name = transformed.name.toLowerCase()
  }
  if ('email' in transformed && transformed.email) {
    transformed.email = transformed.email.toLowerCase()
  }
  return transformed
}

// Validation middleware
export const validateCreateUser = (req: Request, _: Response, next: NextFunction): void => {
  try {
    const validated = createUserSchema.parse(req.body)
    req.body = transformUserData(validated)
    next()
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new InvalidInputError('Validation of failed input data on user creation', error.issues)
    }
    throw error
  }
}

export const validateUpdateUser = (req: Request, _: Response, next: NextFunction): void => {
  try {
    const validated = updateUserSchema.parse(req.body)
    req.body = transformUserData(validated)
    next()
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new InvalidInputError('Validation of failed input data on user update', error.issues)
    }
    throw error
  }
}