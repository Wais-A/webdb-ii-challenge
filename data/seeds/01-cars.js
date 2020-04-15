
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '12647887GJK56FO', Make: 'Toyota', Model: "Matrix", Year: 2009, Mileage: 13532.3, TransmissionType: "Automatic", StatusOfTitle: ''},
        {VIN: '1264784545JK56FO', Make: 'Lexus', Model: "Gx", Year: 2019, Mileage: 53532.3, TransmissionType: "Automatic", StatusOfTitle: 'clean'},
        {VIN: '12647347GJK56FO', Make: 'Ford', Model: "Mustang", Year: 2020, Mileage: 132.3, TransmissionType: "Automatic", StatusOfTitle: 'salvage'}
      ]);
    });
};
