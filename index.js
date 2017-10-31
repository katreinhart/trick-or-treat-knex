const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

const sql = knex('houses').toString()

console.log(sql)

knex.destroy()
