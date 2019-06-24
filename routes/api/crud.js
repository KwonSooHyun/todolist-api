const models = require('../../models');

const { Lists } = models;

const controller = {};

controller.list = async (req, res) => {
  const listData = await Lists.findAll();
  res.send({
    code: 200,
    listData,
  });
};

controller.create = async (req, res) => {
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

controller.delete = async (req, res) => {
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

module.exports = controller;
