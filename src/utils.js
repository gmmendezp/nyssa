const yeoman = require('yeoman-environment')
const fs = require('fs')
const config = require('./config')

class Utils {
  constructor () {
    this.currentFolder = process.cwd()
  }
  /**
   * Runs the create app generator for FE or BE
   * @param {String} generatorName one of 'BE' or 'FE'
   * @param {String} projectPath where the project has to be generated
   * @returns {Promise} resolves if the project is generated correctly
   */
  init (generatorName, projectPath = '.') {
    console.log(`\nGenerating ${config.names[generatorName]} project...`)
    let generator = config.generators[generatorName]
    return this.runGenerator(generator, {}, projectPath)
  }
  /**
   * Runs the create app generator for FE or BE
   * @param {String} generatorName one of 'BE' or 'FE'
   * @param {String} type sub-generator to use
   * @returns {Promise} resolves if it was generated correctly
   */
  generate (generatorName, type) {
    console.log(`\nGenerating ${config.names[generatorName]}...`)
    let generator = `${config.generators[generatorName]}:${type}`
    return this.runGenerator(generator)
  }
  /**
   * Sets the current working directory to the initial value
   * @returns {Promise} It always resolves
   */
  backToFolder () {
    process.chdir(this.currentFolder)
    return Promise.resolve()
  }
  /**
   * Create and move the working directory to a folder, if the folder exists it
   * will only move
   * @param {String} folder relative path to the folder
   * @returns {Promise} resolves if it moves to the folder correctly
   */
  moveToFolder (folder) {
    return new Promise((resolve, reject) => {
      fs.mkdir(folder, () => {
        process.chdir(folder)
        resolve()
      })
    })
  }
  /**
   * Run the specified generator
   * @param {String} generator full name of the generator
   * @param {Object} params these are sent to the yeoman environment
   * @param {String} path where the generator needs to be called
   * @returns {Promise} resolves if the project was generated correctly
   */
  runGenerator (generator, params, path = '.') {
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
  }
}

module.exports = new Utils()
