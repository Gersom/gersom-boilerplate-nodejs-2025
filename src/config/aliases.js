const moduleAlias = require('module-alias')
const path = require('path')

const srcPath = path.join(__dirname, '..')

moduleAlias.addAliases({
  '@root': `${srcPath}/../`,
  '@src': `${srcPath}`,
  '@api': `${srcPath}/api`,
  '@config': `${srcPath}/config`,
  '@data': `${srcPath}/data`,
  '@middleware': `${srcPath}/middleware`,
  '@models': `${srcPath}/models`,
  '@storage': `${srcPath}/storage`,
  '@utils': `${srcPath}/utils`
})

moduleAlias()