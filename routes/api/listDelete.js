const models = require('../../models');

const { Lists } = models;

module.exports = async (req, res) => {
  const { id } = req.body;
  await Lists.destroy({
    where: {
      listId: id,
    },
  });
  res.send({
    code: 200,
    message: '생성완료',
  });
};
