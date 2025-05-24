const author = {
  name: 'Gersom Alaja',
  email: 'gersom.alaja@gmail.com',
  github: 'https://github.com/Gersom',
  linkedin: 'https://www.linkedin.com/in/gersomalaja'
}

const printAuthor = () => {
  console.log('AUTHOR:')
  console.info(`* 🧑 ${author.name}`)
  console.info(`* 📧 ${author.email}`)
  console.info(`* 🔗 ${author.github}`)
  console.info(`* 🔗 ${author.linkedin}`)
  console.log('')
}

module.exports = { author, printAuthor }