const express = require("express");
const router = express.Router();

//Controller

const {
  createOperation,
  getOperations,
  getOpByID,
  editOpetarion,
  delOperation,
} = require("../controllers/operation.controller");

//HTTP REQUEST

router.route("/").post(createOperation).get(getOperations);

router.route("/:id").get(getOpByID).patch(editOpetarion).delete(delOperation);

module.exports = { operationsRouter: router };
