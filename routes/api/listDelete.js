const models = require('../../models');

const { Lists } = models;

module.exports = async (req, res) => {
  const { id } = req.body;
  const list = await Lists.destroy({
    where: {
      listId: id,
    }
  });

  console.log(list);
  res.send({
    code: 200,
    message: '생성완료',
  })
}