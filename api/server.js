const express = require("express");
const helmet = require("helmet");

// const cohortsRouter = require('../routers/cohorts-router.js);
// const studentsRouter = require('../routers/students-router');
const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/spi/cohorts', cohortsRouter);
// server.use('/spi/students', studentsRouter);

module.export = server;
