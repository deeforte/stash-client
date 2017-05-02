'use strict'
require('./index')

const store = require('./store')
const yarnEvents = require('./yarnevents')

const signUpSuccess = (data) => {
  $('#sign-up').css('visibility', 'hidden')
  $('#sign-up').trigger('reset')
}
const signUpFailure = () => {
}
const signInSuccess = (data) => {
//  console.log('signin success ran data is ', data)
  store.user = data.user
  yarnEvents.getUserYarns()
  $('h3').text('Welcome ' + store.user.email)
  $('.signinForms').css('visibility', 'hidden')
  $('.signoutForms').css('visibility', 'visible')
  $('.container').css('visibility', 'visible')
  $('#sign-in').trigger('reset')
}

const signInFailure = () => {
//  console.error(error)
}

const signOutSuccess = (data) => {
  store.user = null
  $('.signinForms').css('visibility', 'visible')
  $('.signoutForms').css('visibility', 'hidden')
  $('.sign-in').css('visibility', 'visible')
  $('.container').css('visibility', 'hidden')
  $('ul#yarnList').html('')
  $('.up-btn').css('visibility', 'hidden')
}

const signOutFailure = (error) => {
//  console.error('signout failure ran error is ', error)
}

const chgPswdSuccess = (data) => {
  $('#change-password').trigger('reset')
//  console.log(data)
}

const chgPswdFailure = (error) => {
//  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  chgPswdSuccess,
  chgPswdFailure
}
