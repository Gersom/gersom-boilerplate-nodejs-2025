import customError from './customError.js';

// Base Error Class
export const BaseError = class extends Error {
  constructor(err, customMessage, context) {
    const messageToprint = `Error definition not found for ${err.code}`
    if (!err) throw new Error(messageToprint);

    super(customMessage || err.description);
    this.name = this.constructor.name;
    this.code = err.code;
    this.status = err.status;
    this.context = context || null;
  }
}

// Authentication & Authorization Error Classes
export const UnauthorizedError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.UNAUTHORIZED, customMessage, context);
  }
}

export const ForbiddenError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.FORBIDDEN, customMessage, context);
  }
}

export const InvalidTokenError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.INVALID_TOKEN, customMessage, context);
  }
}

export const TokenExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.TOKEN_EXPIRED, customMessage, context);
  }
}

export const RefreshTokenExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.REFRESH_TOKEN_EXPIRED, customMessage, context);
  }
}

export const RefreshTokenInvalidError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.REFRESH_TOKEN_INVALID, customMessage, context);
  }
}

// Data & Resource Error Classes
export const NotFoundError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.NOT_FOUND, customMessage, context);
  }
}

export const DataConflictError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.DATA_CONFLICT, customMessage, context);
  }
}

export const ResourceExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.RESOURCE_EXPIRED, customMessage, context);
  }
}

// Validation Error Classes
export const InvalidInputError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.INVALID_INPUT, customMessage, context);
  }
}

export const CodeExpiredError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.CODE_EXPIRED, customMessage, context);
  }
}

// Email Error Classes
export const EmailSendError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.EMAIL_SEND_ERROR, customMessage, context);
  }
}

// Server Error Classes
export const InternalError = class extends BaseError {
  constructor(customMessage, context) {
    super(customError.INTERNAL_ERROR, customMessage, context);
  }
}