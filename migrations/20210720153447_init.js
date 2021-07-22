const { TableId } = require('../src/data/common')

exports.up = async function (knex) {
  await knex.raw('create extension if not exists "uuid-ossp"')

  // --- Manufacturers ---

  const existsManufacturers = await knex.schema
    .withSchema('public')
    .hasTable(TableId.MANUFACTURERS)

  if (existsManufacturers) return

  await knex.schema
    .withSchema('public')
    .createTable(TableId.MANUFACTURERS, function (t) {
      t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
      t.increments('num', { primaryKey: false })
      t.string('name', 255).notNullable()
      t.string('cif', 255).notNullable()
      t.string('address', 255).notNullable()
    })

  // --- Items ---

  const existsItems = await knex.schema
    .withSchema('public')
    .hasTable(TableId.ITEMS)

  if (existsItems) return

  await knex.schema
    .withSchema('public')
    .createTable(TableId.ITEMS, function (t) {
      t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
      t.increments('num', { primaryKey: false })
      t.string('name', 255).notNullable()
      t.integer('relevance').unsigned().notNullable()
      t.decimal('price').unsigned().notNullable()
      t.uuid('manufacturer').notNullable()

      t.foreign('manufacturer')
        .references('id')
        .inTable(TableId.MANUFACTURERS)
    })
}

exports.down = async function (knex) {
  await knex.schema
    .withSchema('public')
    .dropTable(TableId.ITEMS)
    .dropTable(TableId.MANUFACTURERS)

  await knex.raw('drop extension if exists "uuid-ossp"')
}
