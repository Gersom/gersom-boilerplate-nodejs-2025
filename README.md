# GerCash Backend Boilerplate 🚀

[English](#english) | [Español](#español)

## English

### Description
A modern Node.js backend boilerplate with a robust architecture, ready for production. This project provides a solid foundation for building scalable REST APIs with best practices and modern JavaScript features.

### Features
- 🛠 **Modern Stack**: Node.js with ES Modules
- 🔄 **Multiple Database Support**: MongoDB, MySQL, and PostgreSQL
- 🔒 **Security**: Built-in error handling, CORS, and environment configuration
- 📝 **Code Quality**: ESLint with Standard.js
- 🚀 **Performance**: Optimized for production
- 🔍 **Development**: Hot reloading and debugging support
- 📦 **Modular**: Well-organized project structure
- 🌐 **API**: RESTful architecture with Express.js

### Prerequisites
- Node.js (v18 or higher)
- MongoDB / MySQL / PostgreSQL (depending on your choice)
- npm or bun

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/gersom-boilerplate-nodejs-2025.git
cd gersom-boilerplate-nodejs-2025
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Available Scripts
- `npm start` - Start the server
- `npm run dev` - Start development server with hot reload
- `npm run dev:bun` - Start development server using Bun
- `npm run lint` - Run linter
- `npm run lint:fix` - Fix linting issues
- `npm test` - Run tests

### Project Structure
```
├── src/
│   ├── api/          # API routes
│   ├── config/       # Configuration files
│   ├── database/     # Database connections
│   ├── middleware/   # Express middlewares
│   ├── models/       # Database models
│   ├── storage/      # Static files
│   └── utils/        # Utility functions
├── .env.example      # Environment variables template
├── package.json      # Project dependencies
└── server.js         # Application entry point
```

### Environment Variables
Required environment variables:
- `NODE_ENV`: Environment (development/production)
- `HOST`: Server host
- `PORT`: Server port
- `DB_TYPE`: Database type (mongodb/mysql/postgresql)
- `DB_URI`: Database connection URI
- `DB_NAME`: Database name
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `ALLOWED_PROD_ORIGINS`: Allowed origins for production
- `ALLOWED_DEV_ORIGINS`: Allowed origins for development

### Error Handling
The project includes a comprehensive error handling system with:
- Custom error classes
- Standardized error responses
- Development mode with detailed error information
- Production mode with secure error messages

### Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License
This project is licensed under the Mozilla Public License 2.0 (MPL-2.0) - see the [LICENSE](LICENSE) file for details.

The MPL-2.0 allows you to:
- Use this boilerplate in private projects
- Modify the code for your needs
- Keep your project's code private
- Create derivative works

However, it requires that:
- The original boilerplate code remains under MPL-2.0
- Any modifications to the boilerplate itself must be open source
- You cannot sell the boilerplate or its modified versions

For more information about MPL-2.0, visit [Mozilla's MPL-2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/).

---

## Español

### Descripción
Un boilerplate moderno para backend en Node.js con una arquitectura robusta, listo para producción. Este proyecto proporciona una base sólida para construir APIs REST escalables con las mejores prácticas y características modernas de JavaScript.

### Características
- 🛠 **Stack Moderno**: Node.js con ES Modules
- 🔄 **Soporte Multi-Base de Datos**: MongoDB, MySQL y PostgreSQL
- 🔒 **Seguridad**: Manejo de errores integrado, CORS y configuración de entorno
- 📝 **Calidad de Código**: ESLint con Standard.js
- 🚀 **Rendimiento**: Optimizado para producción
- 🔍 **Desarrollo**: Recarga en caliente y soporte para depuración
- 📦 **Modular**: Estructura de proyecto bien organizada
- 🌐 **API**: Arquitectura RESTful con Express.js

### Prerrequisitos
- Node.js (v18 o superior)
- MongoDB / MySQL / PostgreSQL (según tu elección)
- npm o bun

### Instalación
1. Clonar el repositorio
```bash
git clone https://github.com/yourusername/gersom-boilerplate-nodejs-2025.git
cd gersom-boilerplate-nodejs-2025
```

2. Instalar dependencias
```bash
npm install
# o
bun install
```

3. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tu configuración
```

### Scripts Disponibles
- `npm start` - Iniciar el servidor
- `npm run dev` - Iniciar servidor de desarrollo con recarga en caliente
- `npm run dev:bun` - Iniciar servidor de desarrollo usando Bun
- `npm run lint` - Ejecutar linter
- `npm run lint:fix` - Corregir problemas de linting
- `npm test` - Ejecutar pruebas

### Estructura del Proyecto
```
├── src/
│   ├── api/          # Rutas de la API
│   ├── config/       # Archivos de configuración
│   ├── database/     # Conexiones a bases de datos
│   ├── middleware/   # Middlewares de Express
│   ├── models/       # Modelos de base de datos
│   ├── storage/      # Archivos estáticos
│   └── utils/        # Funciones de utilidad
├── .env.example      # Plantilla de variables de entorno
├── package.json      # Dependencias del proyecto
└── server.js         # Punto de entrada de la aplicación
```

### Variables de Entorno
Variables de entorno requeridas:
- `NODE_ENV`: Entorno (development/production)
- `HOST`: Host del servidor
- `PORT`: Puerto del servidor
- `DB_TYPE`: Tipo de base de datos (mongodb/mysql/postgresql)
- `DB_URI`: URI de conexión a la base de datos
- `DB_NAME`: Nombre de la base de datos
- `DB_USER`: Usuario de la base de datos
- `DB_PASSWORD`: Contraseña de la base de datos
- `ALLOWED_PROD_ORIGINS`: Orígenes permitidos para producción
- `ALLOWED_DEV_ORIGINS`: Orígenes permitidos para desarrollo

### Manejo de Errores
El proyecto incluye un sistema completo de manejo de errores con:
- Clases de error personalizadas
- Respuestas de error estandarizadas
- Modo desarrollo con información detallada de errores
- Modo producción con mensajes de error seguros

### Contribuir
1. Haz fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Licencia
Este proyecto está licenciado bajo la Mozilla Public License 2.0 (MPL-2.0) - ver el archivo [LICENSE](LICENSE) para más detalles.

La MPL-2.0 te permite:
- Usar este boilerplate en proyectos privados
- Modificar el código para tus necesidades
- Mantener el código de tu proyecto en privado
- Crear trabajos derivados

Sin embargo, requiere que:
- El código original del boilerplate permanezca bajo MPL-2.0
- Cualquier modificación al boilerplate en sí debe ser de código abierto
- No puedes vender el boilerplate ni sus versiones modificadas

Para más información sobre MPL-2.0, visita el [FAQ de MPL-2.0 de Mozilla](https://www.mozilla.org/en-US/MPL/2.0/FAQ/). 