// v1
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// v2
// const asyncHandler = (fn) => {
//   return async (req, res, next) => {
//     try {
//       if (fn.length > 3) {
//         // Si la función tiene más de 3 parámetros, asumimos que es un error handler
//         await fn(err, req, res, next)
//       } else {
//         await fn(req, res, next)
//       }
//     } catch (error) {
//       next(error);
//     }
//   }
// }

// v3 combinado
// const asyncHandler = (fn) => {
//   return (...args) => {
//     const next = args[args.length - 1];
//     if (args.length === 4) {
//       // Es un manejador de errores (err, req, res, next)
//       Promise.resolve(fn(...args)).catch(next);
//     } else {
//       // Es un manejador regular (req, res, next)
//       Promise.resolve(fn(...args.slice(0, -1))).catch(next);
//     }
//   };
// };

// v4 separado
// const asyncHandler = (fn) => {
//   return (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch(next)
//   }
// }

// const asyncErrorHandler = (fn) => {
//   return (err, req, res, next) => {
//     Promise.resolve(fn(err, req, res, next)).catch(next)
//   }
// }

module.exports = { asyncHandler }