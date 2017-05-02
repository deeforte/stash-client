'use strict'
require('./index')

const store = require('./store')
const yarnEvents = require('./yarnevents')
// const gameEvents = require('./games.js')

const signUpSuccess = (data) => {
//  console.log('user signed up -', data)
//  document.getElementById('sign-up').reset
  $('#sign-up').css('visibility', 'hidden')
}
const signUpFailure = () => {
  console.error('signup error')
}
const signInSuccess = (data) => {
  console.log('signin success ran data is ', data)
  store.user = data.user
  yarnEvents.getUserYarns()
//  $('h2').text('')
//  $('h4').text('Scoreboard: no games played since signin')
  $('h3').text('Welcome ' + store.user.email)
  $('.signinForms').css('visibility', 'hidden')
  $('.signoutForms').css('visibility', 'visible')
  $('.container').css('visibility', 'visible')
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

const signOutSuccess = (data) => {
//  console.log('signout success ran data is ', data)
//  console.log('store before set to null ', store)
  store.user = null
//  document.getElementsByTagName('li').innerHTML = ''
//  const oldList = document.getElementsByTagName('ul')
//  document.getElementById('yarnList').reset()
//  $('#yarnList').trigger('reset')
//  for (let i = 0; i < oldList.length; i++) {
//    oldList.getElementsByTagName('li')[i].innerHTML = 'make blank'
//  }
  $('.signinForms').css('visibility', 'visible')
  $('.signoutForms').css('visibility', 'hidden')
  $('.sign-in').css('visibility', 'visible')
  $('.container').css('visibility', 'hidden')
//  document.getElementById('yarnList').parentNode.removeChild(document.getElementById('yarnList'))
//  $('ul#yarnList').html('')
  $('li#headings').html('name quantity length color project')
//  $('h2').text('Signin to begin play')
//  $('h3').text('')
//  $('h3').text('')
//  $('h5').text('')
//  console.log('store after set to null ', store)
}

const signOutFailure = (error) => {
//  console.error('signout failure ran error is ', error)
}

const chgPswdSuccess = (data) => {
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
