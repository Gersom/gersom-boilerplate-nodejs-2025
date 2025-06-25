export type Author = {
  name: string
  email: string
  github: string
  linkedin: string
}

export const author: Author = {
  name: 'Gersom Alaja',
  email: 'gersomalaja@gmail.com',
  github: 'https://github.com/Gersom',
  linkedin: 'https://www.linkedin.com/in/gersomalaja'
}

export const printAuthor = (): void => {
  console.log('AUTHOR:')
  console.info(`* 🧑 ${author.name}`)
  console.info(`* 📧 ${author.email}`)
  console.info(`* 🔗 ${author.github}`)
  console.info(`* 🔗 ${author.linkedin}`)
  console.log('')
}