'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./userevents.js')
const yarnEvents = require('./yarnevents.js')
// const usersOnLine = require('./store')
const currentYarns = require('./store')
const getYarnFields = require('../../lib/get-form-fields')

// console.log('up and running main js')
// const updatedYarn = {}
let yarnDisplay = []

const listYarns = function (array) {
//  console.log('yarnDisplay', yarnDisplay)
//  document.getElementById('yarnList').firstChild.innerHTML = 'name quantity length color project'
  $('ul#yarnList').html('')
  $('li#headings').html('name quantity length color project')
  for (let i = 0; i < array.length; i++) {
//    console.log('inlistYarns', i)
//    console.log('yarn id', array[i].id)
    const ul = document.getElementById('yarnList')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(' - id ' + array[i].id + ' ' + array[i].name + ' ' + array[i].quantity + '- ' + array[i].yards + ' yd skeins ' + ' in ' + array[i].color + ' planned for ' + array[i].project))
    const delbutton = document.createElement('button')
    delbutton.innerHTML = 'delete'
    delbutton.addEventListener('click', delYarn)
    li.appendChild(delbutton)
    li.setAttribute('id', array[i].id)
//    console.log('li ID', li.id)
//    li.addEventListener('click', viewYarn)
    ul.appendChild(li)
  }
}

const showYarn = function () {
  $('.up-btn').css('visibility', 'visible')
//  console.log('current yarns', currentYarns)
  yarnDisplay = currentYarns.yarns.yarns
//  console.log('yarnDisplay', yarnDisplay)
// console.log([yarnDisplay]['yarns'])
//  console.log('currentYarns', currentYarns)
//  yarnEvents.getUserYarns()
//  console.log('in show yarnDisplay', yarnDisplay)
  yarnDisplay = currentYarns.yarns.yarns
  listYarns(yarnDisplay)
}
const refreshYarn = function () {
  yarnEvents.getUserYarns()
//  console.log('in show yarnDisplay', yarnDisplay)
  yarnDisplay = currentYarns.yarns.yarns
//  listYarns(yarnDisplay)
}

const delYarn = function (yarnDelId) {
//  console.log($(this).closest('li').attr('id'))
//  yarnDelId = parseInt($(this).attr('id'))
  yarnDelId = ($(this).closest('li').attr('id'))
//  console.log('yarnDelId', yarnDelId)
  yarnEvents.yarnDelete(yarnDelId)
  refreshYarn()
//  listYarns(yarnDisplay)
  showYarn()
}

const upYarn = function (event) {
  event.preventDefault()
  const data = getYarnFields(this)
//  console.log('upYarnFields', data)
  yarnEvents.yarnUpdate(data)
  refreshYarn()
  refreshYarn()
  refreshYarn()
  //  listYarns(yarnDisplay)
  showYarn()
}

const addYarn = function (event) {
  event.preventDefault()
//  console.log('getYarnFields', getYarnFields)
  const data = getYarnFields(this)
//  console.log('newYarn', data)
  yarnEvents.yarnCreate(data)
  refreshYarn()
  refreshYarn()
  refreshYarn()
  //  listYarns(yarnDisplay)
  showYarn()
}

$(() => {
  setAPIOrigin(location, config)
//  $('.gameBoard').children('').children('').children('').on('click', fillSqInPlay)
  authEvents.addHandlers()
  $('.show-yarn').on('click', showYarn)
  $('.form-addYarn').on('submit', addYarn)
  $('.form-updateYarn').on('submit', upYarn)
//  $('#add-yarnform').on('click', addYarn)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
