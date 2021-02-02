import fs from 'fs'
import Store from 'electron-store'

import { PasswordManager } from './password-manager'

const examplePath = '/Desktop/example.txt'

function checkConfigExists(path: string = examplePath) {
  return
  console.log('in the func', path, fs.existsSync(path))
  try {
    if (fs.existsSync(path)) {
      console.log('existe', fs.existsSync(path))
    }
    return false
  } catch (err) {
    console.error(err)
  }
}
// const passwordsMatch = await PasswordManager.compare(existingUser.password, password)

function createUsersConfigFile(password: string) {
  let hashedPassword = null

  PasswordManager.toHash(password).then((password) =>
    console.log('hashedPassword', password)
  )
  return
  console.log('creating file', password)
  const store = new Store({ name: 'radixContactsConfig' })

  store.set('auth', hashedPassword)
  console.log(store.get('auth'))
}

export { checkConfigExists, createUsersConfigFile }
