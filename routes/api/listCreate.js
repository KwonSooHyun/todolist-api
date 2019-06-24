const models = require('../../models');

const { Lists } = models;

module.exports = async (req, res) => {
  const { text } = req.body;
  const list = await Lists.create({
    text,
  });

  const createList = await Lists.findOne({
    where: {
      listId: list.null,
    },
  });
  res.send({
    code: 200,
    createList,
    message: '생성완료',
  });
};
