const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
  quantity: Sequelize.NUMBER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  price: Sequelize.BIGINT,
});

const User = sequelize.define("users", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
})

module.exports = {
  db: sequelize,
  Item,
  User,
};


