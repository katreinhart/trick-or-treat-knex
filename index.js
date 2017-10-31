const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

// knex('houses').then(console.log)
// console.log(sql)

// crud routes

// INSERT 
// knex('candies').insert({
//   name: 'Snickers',
//   size: 'Fun Size',
//   house_id: 3
// }).catch(console.error)

// GET ONE
// knex('houses').where('last_name', 'Hernandez').then(console.log)
// knex('houses').where('id', 2).then(console.log)

// UPDATE
// knex('candies').where('id', 3).update({ size: 'King Size' }).returning('*').then(console.log)
// knex('houses').where('last_name', 'Hernandez')
//               .update({ address: '5432 Postgres Ql.'})
//               .returning('*')
//               .then(console.log)

// DELETE
// knex('candies').where({ size: 'small' }).del().returning('*').then(console.log)
// knex('candies').where({ name: 'Starbursts' }).del().returning('*').then(console.log)

// NEXT STEPS
// knex('houses').insert({
//   address: '1234 Sql St.',
//   last_name: 'Rogers'
// }).returning('*').then(console.log)

// knex('candies').insert({
//   name: 'Milky Way',
//   size: 'Fun Size',
//   house_id: 4
// }).returning('*').then(console.log)

// knex('houses')
//   .select('houses.last_name AS last_name', 'candies.name AS candy_name')
//   .innerJoin('candies', 'candies.house_id', 'houses.id')
//   .then(console.log)

const housesPromise = knex('houses')
      .select('houses.last_name AS last_name', 'houses.id AS house_id')
      .where({ last_name: 'Hernandez' })
      .catch(console.error)
const candiesPromise = knex('candies')
      .select('candies.name AS candy_name', 'candies.house_id AS house_id')
      .catch(console.error)

Promise.all([housesPromise, candiesPromise]).then(result => {
  const { last_name, house_id } = result[0][0]
  const candies = result[1].filter(item => item.house_id === house_id)
  const theThingIWant = {
    last_name,
    house_id,
    candies
  }
  console.log(theThingIWant)
})

knex.destroy()
