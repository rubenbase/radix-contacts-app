import Store from './store'
import { PasswordManager } from './password-manager'
import isBrowser from '../helpers/isBrowser'

async function validatePassword(password: string) {
  const store = new Store()
  const passwordsMatch = await PasswordManager.compare(store.get('auth'), password)

  if (!passwordsMatch) throw new Error('Invalid credentials')

  if (isBrowser) {
    window.location.assign('contacts')
  }
}

export { validatePassword }
