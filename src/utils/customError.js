const createError = (status, code, description) => ({
  status,
  code,
  description
});

const customError = {
  // Authentication & Authorization Errors
  UNAUTHORIZED: createError(401, 'AUTH_001', 'No permission to access this resource'),
  FORBIDDEN: createError(403, 'AUTH_002', 'Action not allowed'),
  INVALID_TOKEN: createError(401, 'AUTH_003', 'Invalid token provided'),
  TOKEN_EXPIRED: createError(401, 'AUTH_004', 'Token has expired'),
  REFRESH_TOKEN_EXPIRED: createError(401, 'AUTH_005', 'Refresh token has expired'),
  REFRESH_TOKEN_INVALID: createError(401, 'AUTH_006', 'Invalid refresh token provided'),

  // Data & Resource Errors
  NOT_FOUND: createError(404, 'DATA_001', 'Requested resource not found'),
  DATA_CONFLICT: createError(409, 'DATA_002', 'Data conflict detected'),
  RESOURCE_EXPIRED: createError(410, 'DATA_003', 'Resource has expired and is no longer available'),

  // Validation Errors
  INVALID_INPUT: createError(400, 'VALID_001', 'Invalid or incomplete input data'),
  CODE_EXPIRED: createError(400, 'VALID_002', 'Verification code has expired'),

  // Email Errors
  EMAIL_SEND_ERROR: createError(500, 'EMAIL_001', 'Failed to send email'),

  // Server Errors
  INTERNAL_ERROR: createError(500, 'SERVER_001', 'Internal server error')
};

export default customError;