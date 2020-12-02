exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('weather').del()
    .then(function () {
      // Inserts seed entries
      return knex('weather').insert([
        { id: 1, code: 'c', name: 'clear', condition: 'good' },
        { id: 2, code: 'lc', name: 'light-cloud', condition: 'good' },
        { id: 3, code: 'hc', name: 'heavy-cloud', condition: 'ok' },
        { id: 4, code: 's', name: 'showers', condition: 'ok' },
        { id: 5, code: 'lr', name: 'light-rain', condition: 'ok' },
        { id: 6, code: 'hr', name: 'heavy-rain', condition: 'terrible' },
        { id: 7, code: 't', name: 'thunderstorm', condition: 'terrible' },
        { id: 8, code: 'h', name: 'hail', condition: 'terrible' }
      ])
    })
}
