'use strict'

const config = require('./config')
const store = require('./store')

const read = function () {
  return $.ajax({
//    url: 'http://localhost:4741/yarns',
    url: config.apiOrigin + '/yarns',
    method: 'GET',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function (newYarn) {
  return $.ajax({
    url: config.apiOrigin + '/yarns',
//    url: 'http://localhost:4741/yarns',
    method: 'POST',
    data: newYarn,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (updatedYarn) {
//  console.log(updatedID)
//  console.log(store)
//  console.log(updatedYarn)
  return $.ajax({
    url: config.apiOrigin + '/yarns/' + updatedYarn.yarn.id,
    method: 'PATCH',
    data: updatedYarn,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const destroy = function (yarnDelId) {
//  console.log(updatedID)
//  console.log(store)
//  console.log(updatedYarn)
  return $.ajax({
//    url: 'http://localhost:4741/yarns/' + yarnDelId,
    url: config.apiOrigin + '/yarns/' + yarnDelId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  read,
  create,
  update,
  destroy
}
