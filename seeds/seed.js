const sequelize = require('../config/connection');
const { User, Past, Future } = require('../models');

const userData = require('./userData.json');
const pastData = require('./pastData.json');
const futureData = require('./futureData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const past of pastData) {
    await Past.create({
      ...past,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const future of futureData) {
    await Future.create({
      ...future,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
