
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN')
            .notNullable()
            .unique();
        tbl.string('make')
            .notNullable()
            .index();
        tbl.string('model')
            .notNullable();
        tbl.float('milage')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
