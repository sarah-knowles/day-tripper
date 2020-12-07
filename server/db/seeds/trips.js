exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        { id: 1, code: 'good', activity: 'beach' },
        { id: 2, code: 'good', activity: 'SUP' },
        { id: 3, code: 'good', activity: 'garden' },
        { id: 4, code: 'ok', activity: 'library' },
        { id: 5, code: 'ok', activity: 'movies' },
        { id: 6, code: 'ok', activity: 'tenpin' },
        { id: 7, code: 'terrible', activity: 'chill' },
        { id: 8, code: 'terrible', activity: 'bed' }
      ])
    })
}
