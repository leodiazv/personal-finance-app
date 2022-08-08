const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const { operationsRouter } = require("./routes/operations.routes");
const { db } = require("./utils/database");

const app = express();
app.use(cors());
app.use(express.json());

db.sync()
  .then(() => console.log("Database synced :)"))
  .catch((err) => console.log(err));

//Endpoints
app.use("/api/v1/operations", operationsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server ready");
});

module.export = { viteNodeApp: app };
