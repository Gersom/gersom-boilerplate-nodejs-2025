const ERROR_CODES = {
  AUTH: {
    UNAUTHORIZED: {
      // No tiene permiso para acceder a este recurso
      code: 'AUTH_001',
      description: 'No permission',
      status: 401
    },
    FORBIDDEN: {
      // No tiene permiso para realizar esta acción
      code: 'AUTH_002',
      description: 'Action not allowed',
      status: 403
    }
  },

  EXPIRATION: {
    EXPIRED: {
      // El recurso solicitado ya no está disponible porque ha expirado.
      code: 'EXP_001',
      description: 'Resource expired',
      status: 410
    },
    TOKEN_EXPIRED: {
      // El token proporcionado ha expirado. Por favor, solicite uno nuevo.
      code: 'EXP_002',
      description: 'Token expired',
      status: 401
    },
    REFRESH_TOKEN_EXPIRED: {
      // El token de refresco ha expirado. Debe autenticarse nuevamente.
      code: 'EXP_003',
      description: 'Refresh token expired',
      status: 401
    },
    CODE_EXPIRED: {
      // El código proporcionado ha expirado. Solicite uno nuevo.
      code: 'EXP_004',
      description: 'Code expired',
      status: 401
    }
  },

  EMAIL: {
    SEND_ERROR: {
      // No se pudo enviar el correo electrónico. Intente nuevamente más tarde.
      code: 'EMAIL_001',
      description: 'Email not sent',
      status: 500
    }
  },

  DATA: {
    NOT_FOUND: {
      // El recurso solicitado no fue encontrado en el sistema.
      code: 'DATA_001',
      description: 'Not found',
      status: 404
    },
    CONFLICT: {
      // Existe un conflicto con los datos proporcionados. Verifique la información e intente nuevamente.
      code: 'DATA_002',
      description: 'Data conflict',
      status: 409
    }
  },

  VALIDATION: {
    INVALID_INPUT: {
      // La información enviada no es válida o está incompleta. Revise los datos e intente nuevamente.
      code: 'VALID_001',
      description: 'Invalid input',
      status: 400
    },
    INVALID_TOKEN: {
      // El token proporcionado no es válido. Solicite uno nuevo o verifique su autenticidad.
      code: 'VALID_002',
      description: 'Invalid token',
      status: 401
    },
    REFRESH_TOKEN_INVALID: {
      // El token de refresco proporcionado no es válido. Inicie sesión nuevamente.
      code: 'VALID_003',
      description: 'Invalid refresh token',
      status: 401
    }
  },

  SERVER: {
    INTERNAL_ERROR: {
      // Error interno del servidor
      code: 'SRV_001',
      description: 'Server error',
      status: 500
    }
  }
}

module.exports = ERROR_CODES