const exec = require('child_process').exec
const yeoman = require('yeoman-environment')
var env = yeoman.createEnv()

module.exports = {
  installGenerator: function (generator) {
    console.log(`\nInstalling ${generator}`)
    let intervalId = this.setStillRunningInterval()
    return new Promise((resolve, reject) => {
      exec(`npm i -g generator-${generator}`, err => {
        clearInterval(intervalId)
        return err ? reject(`There was an error installing the generator: ${generator}`) : resolve()
      })
    })
  },
  runGenerator: function (generator, params) {
    console.log(`\nRunning ${generator}...`)
    return new Promise((resolve, reject) => {
      env.lookup(() => env.run(generator, params, err => err
        ? reject(`There was an issue while generating. Code: ${err}`)
        : resolve()
      ))
    })
  },
  setStillRunningInterval: function () {
    return setInterval(() => console.log('Still Running... ¯\\_(ツ)_/¯'), 5000)
  }
}
