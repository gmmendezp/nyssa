'use strict'
const utils = require('../utils')
const config = require('../config')

module.exports = function (projectPath = '.') {
  console.log(`\nGenerating back end for project...`)
  let generator = config.generators.BE
  return utils.runGenerator(generator, {}, projectPath)
}
