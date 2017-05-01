'use strict'
require('./index')
const store = require('./store')

const readYarnSuccess = (yarns) => {
//  console.log('read yarn success ran data is ', yarns)
//  debugger
  store.yarns = yarns
  console.log('in yarnapi - store.yarn', store.yarns)
  console.log('in yarnapi - yarns', yarns)
  console.log('in yarnapi - store.yarns.yarns.length', store.yarns.yarns.length)
  console.log('in yarnapi - store.yarns.yarns', store.yarns.yarns)
  // console.log('yarnDisplay', yarnDisplay)
  // const yarnui = store.yarns.yarns
  // console.log('yarnui', yarnui)
  // for (let i = 0; i < yarnui.length; i++) {
  //  console.log('inlistYarns yarnui')
  //  const ul = document.getElementById('yarnList')
  //  const li = document.createElement('li')
  //  li.appendChild(document.createTextNode(' - ' + yarnui[i].name + ' ' + yarnui[i].quantity + '- ' + yarnui[i].yards + ' yd skeins ' + ' in ' + yarnui[i].color + ' planned for ' + yarnui[i].project))
  //  const button = document.createElement('button')
  //  button.innerHTML = 'update'
  //  li.appendChild(button)
  //  li.setAttribute('id', 'element4')
  //  ul.appendChild(li)
  // }
//  $('h5').text(store.user.email + ' has played ' + store.yarns.yarns.length + ' yarns before this login')
}

const readYarnFailure = (yarn) => {
//  console.log('read bombed')
}

const newYarnSuccess = (yarn) => {
//  console.log('new yarn success ran data is ', yarn)
  store.yarn = yarn
//  console.log(yarn.yarn.id)
//  $('h5').text(store.user.email + ' is playing yarn ' + yarn.yarn.id)
//  console.log(store.yarn)
}

const newYarnFailure = (yarn) => {
//  console.log('create bombed')
}

const updateYarnSuccess = (yarn) => {
//  console.log('update yarn success ran data is ', yarn)
//  console.log(store.yarn)
}

const updateYarnFailure = (yarn) => {
  console.log('update bombed')
}

module.exports = {
  newYarnSuccess,
  newYarnFailure,
  updateYarnSuccess,
  updateYarnFailure,
  readYarnSuccess,
  readYarnFailure
}
