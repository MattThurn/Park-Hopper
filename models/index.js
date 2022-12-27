const User = require('./User');
const Past = require('./Past');
const Future = require('./Future');

User.hasMany(Future, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Future.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Past, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Past.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Past, Future };
