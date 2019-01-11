const express = require("express");

const index = require("./routers/index");
const api = require("./routers/api");

const app = express();
app.use(express.json());

index(app);
api(app);

// app.use(errorHandler);

module.exports = app;
