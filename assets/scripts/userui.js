'use strict'
require('./index')

const store = require('./store')
// const gameEvents = require('./games.js')

const signUpSuccess = (data) => {
  console.log('user signed up -', data)
//  document.getElementById('sign-up').reset
//  $('#sign-up').hide()
}
const signUpFailure = () => {
  console.error('signup error')
}
const signInSuccess = (data) => {
  console.log('signin success ran data is ', data)
  store.user = data.user
//  $('h2').text('')
//  $('h4').text('Scoreboard: no games played since signin')
//  $('h5').text(store.user.email)
//  $('.signinForms').hide()
//  $('.signoutForms').css('visibility', 'visible')
//  $('.gameBoard').css('visibility', 'visible')
  // gameEvents.getUserStats()
  // console.log(store.games)
  // console.log(store)
//  gameEvents.getUserStats()
//  gameEvents.gameCreate()
//  console.log(store)
}

const signInFailure = () => {
//  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
//  signOutSuccess,
//  signOutFailure,
//  chgPswdSuccess,
//  chgPswdFailure
}
