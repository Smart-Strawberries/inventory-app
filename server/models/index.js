const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
  quantity: Sequelize.NUMBER,
  description: Sequelize.TEXT,
});

module.exports = {
  db: sequelize,
  Item,
};


