
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'ABC-123', make: 'Lamborghini', model: 'Gillardo', milage: '10'},
        {VIN: 'XYZ-987', make: 'Audi', model: 'R8', milage: '52'},
        {VIN: 'VIN-387', make: 'Rolls Royce', model: 'Wraith', milage: '9999'}
      ]);
    });
};
