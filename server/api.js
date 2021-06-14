const express = require('express');
const apiRouter = express.Router();

apiRouter.use(express.static('public'));




module.exports = apiRouter;
