'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./userevents.js')
console.log('up and running main js')
const yarn = [
{
	name: 'mountain mohair',
  quantity: 7,
  length: 200,
	fiber: 'wool-mohair',
  color: 'gray',
  weight: 'worsted',
  project: 'sweater'
},
{
	name: 'tidal yarns',
  quantity: 4,
  length: 400,
	fiber: 'alpaca',
  color: 'blue',
  weight: 'dk',
  project: 'sweater'
},
{
	name: 'longmeadow farms',
  quantity: 1,
  length: 800,
	fiber: 'bfl',
  color: 'mustard',
  weight: 'dk',
  project: 'shawl'
},
{
	name: 'harrisville highland',
  quantity: 3,
  length: 200,
	fiber: 'wool',
  color: 'off-white',
  weight: 'worsted',
  project: 'scarf'
},
]
const listYarns = function(array) {
	  for (let i=0; i<array.length; i++) {
			console.log('inlistYarns')
      var ul = document.getElementById("yarnList")
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(' - ' + yarn[i].name + ' ' + yarn[i].quantity + '- ' + yarn[i].length + ' yd skeins ' + yarn[i].fiber + ' in ' + yarn[i].color + ' ' + yarn[i].weight + ' weight planned for ' + yarn[i].project))
      ul.appendChild(li);
	   }
}
listYarns(yarn)

$(() => {
  setAPIOrigin(location, config)
//  $('.gameBoard').children('').children('').children('').on('click', fillSqInPlay)
  authEvents.addHandlers()
//  $('.new-game').on('click', playAgain)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
