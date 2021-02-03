import Store from './store'
import { PasswordManager } from './password-manager'
import isBrowser from '../helpers/isBrowser'

function checkConfigExists() {
  const store = new Store()
  return store.get('auth')
}

async function createUsersConfigFile(password: string) {
  const store = new Store()
  if (store.get('auth')) {
    if (isBrowser) {
      window.location.replace('auth')
      throw new Error('Store already created')
    }
  }

  const hashedPassword = await PasswordManager.toHash(password)
  store.set('auth', hashedPassword)

  // Swap screens after the contacts file is created
  if (isBrowser) {
    window.location.replace('auth')
  }
}

export { checkConfigExists, createUsersConfigFile }
