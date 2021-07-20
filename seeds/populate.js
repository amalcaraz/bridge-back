
exports.seed = async function (knex) {
  await knex('items').del()
  await knex('manufacturers').del()

  const manufacturers = await knex('manufacturers')
    .returning('id')
    .insert([
      { name: 'Le Wagon', cif: 'R0904067F', address: 'Calle del Dr. Esquerdo, 70, 28007 Madrid' },
      { name: 'Ironhack', cif: 'A52334141', address: 'Paseo de Recoletos, 15, 28004 Madrid' },
      { name: 'Neoland', cif: 'G56581275', address: 'Calle de Juan de Mariana, 15, 28045 Madrid' },
      { name: 'Wild Code School', cif: 'C35875152', address: 'Calle de Serrano Anguita, 10, 28004 Madrid' },
      { name: '4Geeks Academy', cif: 'N3176804G', address: 'Cl. Edison, 3, 28006 Madrid' },
      { name: 'Skylab Coders Academy', cif: 'S1405276E', address: 'Calle de Viriato, 22, 28010 Madrid' },
      { name: 'The Bridge', cif: 'G35342708', address: 'Calle de Castelló, 115 B, LOCAL 7, 28006 Madrid' },
    ]);

  for (let manufacturer of manufacturers) {
    await knex('items')
      .insert([
        { name: 'Full Stack Web Development', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'Cybersecurity', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'Data Science', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'UX & UI Product Design', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'Blockchain', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'DevOps', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
        { name: 'Mobile App Development', relevance: getRandomRelevance(), price: getRandomPrice(), manufacturer },
      ]);
  }
}

function getRandomPrice() {
  const min = 2 * 1000
  const max = 10 * 1000

  return Math.ceil((Math.random() * (max - min)) + min)
}

function getRandomRelevance() {
  return Math.ceil(Math.random() * (100))
}