const customError = {
  // Authentication & Authorization Errors
  UNAUTHORIZED: {
    code: 'AUTH_001',
    description: 'No permission to access this resource',
    status: 401
  },
  FORBIDDEN: {
    code: 'AUTH_002', 
    description: 'Action not allowed',
    status: 403
  },
  INVALID_TOKEN: {
    code: 'AUTH_003',
    description: 'Invalid token provided',
    status: 401
  },
  TOKEN_EXPIRED: {
    code: 'AUTH_004',
    description: 'Token has expired',
    status: 401
  },
  REFRESH_TOKEN_EXPIRED: {
    code: 'AUTH_005',
    description: 'Refresh token has expired',
    status: 401
  },
  REFRESH_TOKEN_INVALID: {
    code: 'AUTH_006',
    description: 'Invalid refresh token provided',
    status: 401
  },

  // Data & Resource Errors
  NOT_FOUND: {
    code: 'DATA_001',
    description: 'Requested resource not found',
    status: 404
  },
  DATA_CONFLICT: {
    code: 'DATA_002',
    description: 'Data conflict detected',
    status: 409
  },
  RESOURCE_EXPIRED: {
    code: 'DATA_003',
    description: 'Resource has expired and is no longer available',
    status: 410
  },

  // Validation Errors
  INVALID_INPUT: {
    code: 'VALID_001',
    description: 'Invalid or incomplete input data',
    status: 400
  },
  CODE_EXPIRED: {
    code: 'VALID_002',
    description: 'Verification code has expired',
    status: 400
  },

  // Email Errors
  EMAIL_SEND_ERROR: {
    code: 'EMAIL_001',
    description: 'Failed to send email',
    status: 500
  },

  // Server Errors
  INTERNAL_ERROR: {
    code: 'SERVER_001',
    description: 'Internal server error',
    status: 500
  }
}

export default customError