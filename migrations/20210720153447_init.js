
exports.up = async function (knex) {
  await knex.raw('create extension if not exists "uuid-ossp"')

  // --- Manufacturers ---

  const existsManufacturers = await knex.schema
    .withSchema('public')
    .hasTable('manufacturers')

  if (existsManufacturers) return

  await knex.schema
    .withSchema('public')
    .createTable('manufacturers', function (t) {
      t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
      t.increments('num', { primaryKey: false })
      t.string('name', 255).notNullable()
      t.string('cif', 255).notNullable()
      t.string('address', 255).notNullable()
    })

  // --- Items ---

  const existsItems = await knex.schema
    .withSchema('public')
    .hasTable('items')

  if (existsItems) return

  await knex.schema
    .withSchema('public')
    .createTable('items', function (t) {
      t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
      t.increments('num', { primaryKey: false })
      t.string('name', 255).notNullable()
      t.integer('relevance').unsigned().notNullable()
      t.decimal('price').unsigned().notNullable()
      t.uuid('manufacturer').notNullable()

      t.foreign('manufacturer')
        .references('id')
        .inTable('manufacturers')
    })
}

exports.down = async function (knex) {
  await knex.schema
    .withSchema('public')
    .dropTable('items')
    .dropTable('manufacturers')

  await knex.raw('drop extension if exists "uuid-ossp"')
}
