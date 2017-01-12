'use strict'
const utils = require('../utils')
const config = require('../config')

module.exports = function (projectName, projectPath = '.') {
  console.log(`\nGenerating back end for project ${projectName}...`)
  let generator = config.generators.BE
  return utils.installGenerator(generator).then(
    () => utils.runGenerator(generator, {
      'skip-install': true,
      name: projectName,
      path: projectPath
    })
  )
}
