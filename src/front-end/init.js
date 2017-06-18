'use strict'
const utils = require('../utils')
const config = require('../config')

module.exports = function (projectPath = '.') {
  console.log(`\nGenerating front end for project...`)
  let generator = config.generators.FE
  return utils.runGenerator(generator, {}, projectPath)
}
