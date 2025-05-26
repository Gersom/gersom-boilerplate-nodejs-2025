import { serv } from '#config/env.js'

const startServer = (app) => {
  const message = 'Running on'
  const fullMessage = `* ${message}: ${serv.address} 🌐`

  app.listen(serv.port, () => {
    console.log('* Server started successfully ✅')
    console.log(fullMessage)
  })
}

export default startServer