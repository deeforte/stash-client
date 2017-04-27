'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userApi = require('./userapi.js')
const userUi = require('./userui.js')
const getFormFields = require('../../lib/get-form-fields')
console.log('up and runnning user events')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signUp(data)
    .then(userUi.signUpSuccess)
    .catch(userUi.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signIn(data)
    .then(userUi.signInSuccess, console.log(data, data.credentials.email))
    .catch(userUi.signInFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
//  $('#sign-out').on('submit', onSignOut)
//  $('#change-password').on('submit', onChgPswd)
}

module.exports = {
  addHandlers
}
