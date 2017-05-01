'use strict'

const config = require('./config')
const store = require('./store')

const read = function () {
  return $.ajax({
    url: 'http://localhost:4741/yarns',
    //    url: config.apiOrigin + '/yarns',
    method: 'GET',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function (newYarn) {
  return $.ajax({
//    url: config.apiOrigin + '/yarns',
    url: 'http://localhost:4741/yarns',
    method: 'POST',
    data: newYarn,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (updatedYarn, updatedID) {
//  console.log(updatedID)
//  console.log(store)
//  console.log(updatedYarn)
  return $.ajax({
    url: config.apiOrigin + '/yarns/' + updatedID,
    method: 'PATCH',
    data: updatedYarn,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  read,
  create,
  update
}
