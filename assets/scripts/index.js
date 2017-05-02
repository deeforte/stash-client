'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./userevents.js')
const yarnEvents = require('./yarnevents.js')
// const usersOnLine = require('./store')
const currentYarns = require('./store')
const getYarnFields = require('../../lib/get-form-fields')

console.log('up and running main js')
// const updatedYarn = {}
let yarnDisplay = []
const yarn = [
  {
    name: 'mountain mohair',
    quantity: 7,
    yards: 200,
    color: 'gray',
    project: 'sweater'
  },
  {
    name: 'tidal yarns',
    quantity: 4,
    yards: 400,
    color: 'blue',
    project: 'sweater'
  },
  {
    name: 'longmeadow farms',
    quantity: 1,
    yards: 800,
    color: 'mustard',
    project: 'shawl'
  },
  {
    name: 'harrisville highland',
    quantity: 3,
    yards: 200,
    color: 'off-white',
    project: 'scarf'
  }
]
let upYarnFields = {
  'yarn': {
    'name': '',
    'quantity': 0,
    'yards': 0,
    'color': '',
    'project': ''
  }
}

const listYarns = function (array) {
  console.log('yarnDisplay', yarnDisplay)
//  document.getElementById('yarnList').firstChild.innerHTML = 'name quantity length color project'
  $('li#headings').html('name quantity length color project')
  for (let i = 0; i < array.length; i++) {
    console.log('inlistYarns', i)
    console.log('yarn id', array[i].id)
    const ul = document.getElementById('yarnList')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(' - ' + array[i].name + ' ' + array[i].quantity + '- ' + array[i].yards + ' yd skeins ' + ' in ' + array[i].color + ' planned for ' + array[i].project))
    const upbutton = document.createElement('button')
    upbutton.innerHTML = 'update'
    upbutton.addEventListener('click', upYarn)
    li.appendChild(upbutton)
    const delbutton = document.createElement('button')
    delbutton.innerHTML = 'delete'
    delbutton.addEventListener('click', delYarn)
    li.appendChild(delbutton)
    li.setAttribute('id', array[i].id)
    console.log('li ID', li.id)
//    li.addEventListener('click', viewYarn)
    ul.appendChild(li)
  }
}
// added for debugging, delete later
const viewYarn = function () {
  console.log(this.id)
  console.log($(this).attr('id'))
  console.log($(this).html())
  console.log($(this).text())
}

const showYarn = function () {
  console.log('current yarns', currentYarns)
  yarnDisplay = currentYarns.yarns.yarns
  console.log('yarnDisplay', yarnDisplay)
// console.log([yarnDisplay]['yarns'])
  console.log('currentYarns', currentYarns)
  listYarns(yarnDisplay)
}

const delYarn = function (yarnDelId) {
  console.log($(this).closest('li').attr('id'))
//  yarnDelId = parseInt($(this).attr('id'))
  yarnDelId = ($(this).closest('li').attr('id'))
  console.log('yarnDelId', yarnDelId)
  yarnEvents.yarnDelete(yarnDelId)
}

const upYarn = function (yarnUpId) {
  console.log('update yarn', $(this).closest('li').attr('id'))
  yarnUpId = ($(this).closest('li').attr('id'))
  console.log('yarnUpId', yarnUpId)
  upYarnFields = yarnDisplay[yarnUpId]
  console.log('upYarnFields', upYarnFields)
}

const addYarn = function () {
  console.log('getYarnFields', getYarnFields)
  const newYarn = {
    'yarn': {
      'name': 'shetland',
      'quantity': 3,
      'yards': 250,
      'color': 'gray',
      'project': 'shawl'
    }
  }
  console.log('newYarn', newYarn)
  yarnEvents.yarnCreate(newYarn)
}

$(() => {
  setAPIOrigin(location, config)
//  $('.gameBoard').children('').children('').children('').on('click', fillSqInPlay)
  authEvents.addHandlers()
  $('.show-yarn').on('click', showYarn)
//  $('.add-yarn').on('click', addYarn)
  $('#add-yarnform').on('click', addYarn)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
