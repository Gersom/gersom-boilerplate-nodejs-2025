import { env } from '#config/env.js'

export const startServer = ({ app }) => {
  const message = 'Running on'
  const fullMessage = `* ${message}: ${env.address} 🌐`

  app.listen(env.PORT, () => {
    console.log('* Server started successfully ✅')
    console.log(fullMessage)
  })
}