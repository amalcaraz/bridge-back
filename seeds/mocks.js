
exports.seed = async function (knex) {
  await knex('items').del()
  await knex('manufacturers').del()

  const manufacturers = await knex('manufacturers')
    .returning('id')
    .insert([
      { name: 'The Bridge', cif: '111111', address: 'Calle de Castelló, 115 B, LOCAL 7, 28006 Madrid' },
      { name: 'Ironhack', cif: '222222', address: 'Paseo de Recoletos, 15, 28004 Madrid' },
      { name: 'Le Wagon', cif: '333333', address: 'Calle del Dr. Esquerdo, 70, 28007 Madrid' },
    ]);

  for (let manufacturer of manufacturers) {
    await knex('items')
      .insert([
        { name: 'Full Stack Developer', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'Cibersecurity', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'Data Science', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'UX/UI Product Design', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
      ]);
  }
}

function getRandomPrice() {
  const min = 2 * 1000
  const max = 10 * 1000

  return Math.ceil(Math.random() * (max - min)) + min
}

function getRandomRelevance() {
  return Math.ceil(Math.random() * (100))
}