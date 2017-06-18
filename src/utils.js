const yeoman = require('yeoman-environment')
const fs = require('fs')
let currentFolder = process.cwd()

module.exports = {
  backToFolder: function () {
    process.chdir(currentFolder)
    return Promise.resolve()
  },
  moveToFolder: function (folder) {
    return new Promise((resolve, reject) => {
      fs.mkdir(folder, () => {
        process.chdir(folder)
        resolve()
      })
    })
  },
  runGenerator: function (generator, params, path) {
    return this.moveToFolder(path)
      .then(() => {
        const env = yeoman.createEnv()
        console.log(`\nRunning ${generator}...`)
        return new Promise((resolve, reject) => {
          env.lookup(() =>
            env.run(
              generator,
              params,
              err =>
                err
                  ? reject(
                      new Error(
                        `There was an issue while generating. Code: ${err}`
                      )
                    )
                  : resolve()
            )
          )
        })
      })
      .then(() => this.backToFolder())
  },
  setStillRunningInterval: function () {
    return setInterval(() => console.log('Still Running... ¯\\_(ツ)_/¯'), 5000)
  }
}
