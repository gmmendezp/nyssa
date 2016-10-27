'use strict'
const exec = require('child_process').exec
const yeoman = require('yeoman-environment')
var env = yeoman.createEnv()

module.exports = function (projectName) {
  console.log(`Generating front end for project ${projectName}...`)
  return new Promise(
    (resolve, reject) => {
      console.log('\nInstalling FE generator...')
      let intervalId = setInterval(
        () => console.log('Still Running... ¯\\_(ツ)_/¯'), 5000)
      exec('npm i -g generator-webapp', err => {
        clearInterval(intervalId)
        return err ? reject('There was an error installing the generator') : resolve()
      })
    })
  .then(() =>
    new Promise(
      (resolve, reject) => {
        console.log('\nRunning FE generator...')
        env.lookup(
          () => env.run('webapp', { 'skip-install': true },
            err => err ? reject(`There was an issue while generating. Code: ${err}`) : resolve()))
      }))
}
