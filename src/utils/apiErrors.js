import ERROR_CODES from './errorCodes.js';

// Base Error Class
export const BaseError = class extends Error {
  constructor(errorKey, customMessage, context) {
    const customError = ERROR_CODES[errorKey];
    if (!customError) { 
      throw new Error(`Error definition not found for ${errorKey}`);
    }

    // Use customError.description if customMessage is null, undefined, or empty string
    const message = (customMessage && customMessage.trim() !== '') ? customMessage : customError.description;
    
    super(message);
    this.name = this.constructor.name;
    this.code = customError.code;
    this.status = customError.status;
    this.context = context || null;
  }
}

// Authentication & Authorization Error Classes
export const UnauthorizedError = class extends BaseError {
  constructor(customMessage, context) {
    super('UNAUTHORIZED', customMessage, context);
  }
}

export const ForbiddenError = class extends BaseError {
  constructor(customMessage, context) {
    super('FORBIDDEN', customMessage, context);
  }
}

export const InvalidTokenError = class extends BaseError {
  constructor(customMessage, context) {
    super('INVALID_TOKEN', customMessage, context);
  }
}

export const TokenExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super('TOKEN_EXPIRED', customMessage, context);
  }
}

export const RefreshTokenExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super('REFRESH_TOKEN_EXPIRED', customMessage, context);
  }
}

export const RefreshTokenInvalidError = class extends BaseError {
  constructor(customMessage, context) {
    super('REFRESH_TOKEN_INVALID', customMessage, context);
  }
}

// Data & Resource Error Classes
export const NotFoundError = class extends BaseError {
  constructor(customMessage, context) {
    super('NOT_FOUND', customMessage, context);
  }
}

export const DataConflictError = class extends BaseError {
  constructor(customMessage, context) {
    super('DATA_CONFLICT', customMessage, context);
  }
}

export const ResourceExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super('RESOURCE_EXPIRED', customMessage, context);
  }
}

// Validation Error Classes
export const InvalidInputError = class extends BaseError {
  constructor(customMessage, context) {
    super('INVALID_INPUT', customMessage, context);
  }
}

export const CodeExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super('CODE_EXPIRED', customMessage, context);
  }
}

// Email Error Classes
export const EmailSendError = class extends BaseError {
  constructor(customMessage, context) {
    super('EMAIL_SEND_ERROR', customMessage, context);
  }
}

// Server Error Classes
export const InternalError = class extends BaseError {
  constructor(customMessage, context) {
    super('INTERNAL_ERROR', customMessage, context);
  }
}