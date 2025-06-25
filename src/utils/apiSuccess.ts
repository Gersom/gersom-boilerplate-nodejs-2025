import { Response } from 'express'
import { author, Author } from '#utils/author.js'

export type ApiResponse = {
  success: boolean
  message: string
  author: Author
  count?: number
  data?: any
  [key: string]: any // For additional args
}

export const generateResponse = (
  message: string = 'success',
  data: any = null,
  args: Record<string, any> | null = null
): ApiResponse => {
  let response: ApiResponse = {
    ...args,
    success: true,
    message,
    author
  }

  if (Array.isArray(data)) {
    response.count = data.length
    response.data = data
  } else if (data !== null && typeof data === 'object') {
    response.data = data
  }

  return response
}

export const responseSuccess = (
  res: Response,
  status: number,
  message: string,
  data?: any,
  args?: Record<string, any>
): void => {
  const response = generateResponse(message, data, args)
  res.status(status).json(response)
}