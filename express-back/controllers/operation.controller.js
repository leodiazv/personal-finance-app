//Models
const { Operation } = require("../models/operation.model");

const createOperation = async (req, res, next) => {
  const { opName, amount, date, opType, opCategory } = req.body;

  const newOp = await Operation.create({
    opName,
    amount,
    date,
    opType,
    opCategory,
  });

  res.status(201).json({ newOp });
};

const getOperations = async (req, res, next) => {
  const operations = await Operation.findAll();

  function compare_date(a, b) {
    if (b.date < a.date) {
      return -1;
    }
    if (b.date > a.date) {
      return 1;
    }
    return 0;
  }

  operations.sort(compare_date);

  res.status(200).json({ operations });
};

const getOpByID = async (req, res, next) => {
  const { id } = req.params;

  const operation = await Operation.findAll({ where: { id: id } });

  res.status(200).json({ operation });
};

const editOpetarion = async (req, res, next) => {
  const { opName, amount, date, opCategory } = req.body;
  const { id } = req.params;

  const operation = await Operation.findOne({ where: { id: id } });
  await operation.update({ opName, amount, date, opCategory });

  res.status(200).json({
    msg: "success",
  });
};

const delOperation = async (req, res, next) => {
  const { id } = req.params;
  const operation = await Operation.findOne({ where: { id: id } });

  await operation.destroy({ where: { id: id } });

  res.status(200).json({
    msg: "success",
  });
};

module.exports = {
  createOperation,
  getOperations,
  getOpByID,
  editOpetarion,
  delOperation,
};
