const models = require('../../models');

const { Lists } = models;

module.exports = async (req, res) => {
  const { text } = req.body;
  const list = await Lists.create({
    text,
  });

  console.log(list);
  res.send({
    code: 200,
    message: '생성완료',
  })
}