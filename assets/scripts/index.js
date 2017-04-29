'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./userevents.js')
const yarnEvents = require('./yarnevents.js')
// const usersOnLine = require('./store')
const currentYarns = require('./store')

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
const newYarn = {
  'yarn': {
    'name': 'shetland',
    'quantity': 3,
    'yards': 250,
    'color': 'gray',
    'project': 'shawl'
  }
}

yarnEvents.getUserYarns()
yarnDisplay = currentYarns
console.log('yarnDisplay', yarnDisplay)
//console.log([yarnDisplay]['yarns'])
console.log('currentYarns', currentYarns)

const listYarns = function (array) {
  console.log('yarnDisplay', yarnDisplay)
  for (let i = 0; i < array.length; i++) {
    console.log('inlistYarns')
    const ul = document.getElementById('yarnList')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(' - ' + array[i].name + ' ' + array[i].quantity + '- ' + array[i].yards + ' yd skeins ' + ' in ' + array[i].color + ' planned for ' + array[i].project))
    const button = document.createElement('button')
    button.innerHTML = 'update'
    li.appendChild(button)
    li.setAttribute('id', 'element4')
    ul.appendChild(li)
  }
}

listYarns(yarn)
//listYarns(yarnDisplay)

const addYarn = function (newYarn) {
  console.log('newYarn', newYarn)
  yarnEvents.yarnCreate(newYarn)
}

$(() => {
  setAPIOrigin(location, config)
//  $('.gameBoard').children('').children('').children('').on('click', fillSqInPlay)
  authEvents.addHandlers()
  $('.add-yarn').on('click', addYarn)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
