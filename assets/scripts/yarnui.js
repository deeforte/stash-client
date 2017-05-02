'use strict'
require('./index')
const store = require('./store')

const readYarnSuccess = (yarns) => {
//  console.log('read yarn success ran data is ', yarns)
//  debugger
  store.yarns = yarns
//  console.log('in yarnapi - store.yarn', store.yarns)
//  console.log('in yarnapi - yarns', yarns)
//  console.log('in yarnapi - store.yarns.yarns.length', store.yarns.yarns.length)
//  console.log('in yarnapi - store.yarns.yarns', store.yarns.yarns)
}

const readYarnFailure = (yarn) => {
//  console.log('read bombed')
}

const newYarnSuccess = (yarn) => {
//  console.log('new yarn success ran data is ', yarn)
  store.yarn = yarn
  $('#addModal').modal('toggle')
  $('.form-addYarn').trigger('reset')
//  console.log(yarn.yarn.id)
//  $('h5').text(store.user.email + ' is playing yarn ' + yarn.yarn.id)
//  console.log(store.yarn)
}

const newYarnFailure = (yarn) => {
//  console.log('create bombed')
}

const updateYarnSuccess = (yarn) => {
  $('#upModal').modal('toggle')
  $('.form-updateYarn').trigger('reset')
//  console.log('update yarn success ran data is ', yarn)
//  console.log(store.yarn)
}

const updateYarnFailure = (yarn) => {
//  console.log('update bombed')
}

const deleteYarnSuccess = (yarn) => {
//  console.log('delete yarn success ran data is ', yarn)
//  console.log(store.yarn)
}

const deleteYarnFailure = (yarn) => {
//  console.log('delete bombed')
}

module.exports = {
  newYarnSuccess,
  newYarnFailure,
  updateYarnSuccess,
  updateYarnFailure,
  readYarnSuccess,
  readYarnFailure,
  deleteYarnSuccess,
  deleteYarnFailure
}
