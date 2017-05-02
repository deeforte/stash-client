'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const yarnApi = require('./yarnapi.js')
const yarnUi = require('./yarnui.js')
const getFormFields = require('../../lib/get-form-fields')
console.log('up and runnning yarn events')

const getUserYarns = function () {
  yarnApi.read()
  .then(yarnUi.readYarnSuccess)
  .catch(yarnUi.readYarnFailure)
}

const yarnCreate = function (newYarn) {
  yarnApi.create(newYarn)
  .then(yarnUi.newYarnSuccess)
  .catch(yarnUi.newYarnFailure)
}

const yarnUpdate = function (updatedYarn, updatedID) {
  yarnApi.update(updatedYarn, updatedID)
  .then(yarnUi.updateYarnSuccess)
  .catch(yarnUi.updateYarnFailure)
}

const yarnDelete = function (yarnDelId) {
  yarnApi.destroy(yarnDelId)
  .then(yarnUi.deleteYarnSuccess)
  .catch(yarnUi.deleteYarnFailure)
}

module.exports = {
  yarnCreate,
  yarnUpdate,
  yarnDelete,
  getUserYarns
}
