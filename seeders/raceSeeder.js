module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Races', [{
        race: 'Human',
        as_str: 1,
        as_dex: 1,
        as_con: 1,
        as_int: 1,
        as_wis: 1,
        as_cha: 1,
        language: 'Common',
        language2: "Player's choice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'Dwarf',
        as_str: 0,
        as_dex: 0,
        as_con: 2,
        as_int: 0,
        as_wis: 0,
        as_cha: 0,
        language: 'Common',
        language2: 'Dwarvish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'Elf',
        as_str: 0,
        as_dex: 2,
        as_con: 0,
        as_int: 0,
        as_wis: 0,
        as_cha: 0,
        language: 'Common',
        language2: 'Elvish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'Gnome',
        as_str: 0,
        as_dex: 0,
        as_con: 0,
        as_int: 2,
        as_wis: 0,
        as_cha: 0,
        language: 'Common',
        language2: 'Gnomish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'Half-orc',
        as_str: 2,
        as_dex: 0,
        as_con: 1,
        as_int: 0,
        as_wis: 0,
        as_cha: 0,
        language: 'Common',
        language2: 'Orc',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    },
    
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Races', null, {});
    }
  };