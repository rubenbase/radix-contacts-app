import fs from 'fs'
import path from 'path'
import electron from 'electron'

const configName = 'radixContactsConfig'

// Quick implementation of an Store that handles writing/reading data to a json file
// the location is based on electron's app.getPath() func so it changes per OS
class Store {
  path: string
  data: any

  constructor() {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData')

    this.path = path.join(userDataPath, configName + '.json')
    this.data = parseDataFile(this.path) || {}
  }

  get(key: string) {
    return this.data[key]
  }

  set(key: string, val: unknown) {
    this.data[key] = val
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.data))
    } catch (e) {
      console.error(e)
    }
  }
}

function parseDataFile(filePath: string) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    console.log('Config created')
  }
}

export default Store
