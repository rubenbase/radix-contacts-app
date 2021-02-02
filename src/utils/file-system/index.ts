import fs from 'fs'

const examplePath = '/Desktop/example.txt'

function checkFileExists(path: string = examplePath) {
  try {
    if (fs.existsSync(path)) {
      console.log('existe', fs.existsSync(path))
    }
  } catch (err) {
    console.error(err)
  }
}

export { checkFileExists }
