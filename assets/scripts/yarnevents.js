'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const yarnApi = require('./yarnapi.js')
const yarnUi = require('./yarnui.js')
const getFormFields = require('../../lib/get-form-fields')
// console.log('up and runnning yarn events')

const getUserYarns = function () {
  yarnApi.read()
  .then(yarnUi.readYarnSuccess)
  .catch(yarnUi.readYarnFailure)
}

const yarnCreate = function (newYarn) {
  yarnApi.create(newYarn)
  .then(yarnUi.newYarnSuccess)
  .then(getUserYarns)
  .catch(yarnUi.newYarnFailure)
}

const yarnUpdate = function (updatedYarn) {
  yarnApi.update(updatedYarn)
  .then(yarnUi.updateYarnSuccess)
  .then(getUserYarns)
  .catch(yarnUi.updateYarnFailure)
}

const yarnDelete = function (yarnDelId) {
  yarnApi.destroy(yarnDelId)
  .then(yarnUi.deleteYarnSuccess)
  .then(getUserYarns)
  .catch(yarnUi.deleteYarnFailure)
}

module.exports = {
  yarnCreate,
  yarnUpdate,
  yarnDelete,
  getUserYarns
}
