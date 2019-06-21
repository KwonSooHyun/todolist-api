const models = require('../../models');

const { Lists } = models;

module.exports = async (req, res) => {
  const list = await Lists.findAll();
  res.send({
    code: 200,
    list: list
  })
}