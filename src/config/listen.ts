import { Express } from 'express'
import { env } from '#root/src/config/env/index.js'

interface StartServerConfig {
  app: Express
}

export const startServer = ({ app }: StartServerConfig): void => {
  const message = 'Running on'
  const fullMessage = `* ${message}: ${env.address} 🌐`

  app.listen(env.PORT, () => {
    console.log('* Server started successfully ✅')
    console.log(fullMessage)
  })
}