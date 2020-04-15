
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
   tbl.increments();
   tbl.string('VIN').unique().notNullable();
   tbl.string('Make', 128).notNullable();
   tbl.string('Model').notNullable();
   tbl.integer('Year').notNullable();
   tbl.decimal('Mileage').notNullable();
   tbl.string('TransmissionType').notNullable();
   tbl.string('StatusOfTitle')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
