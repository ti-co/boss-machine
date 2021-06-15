const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

apiRouter.use('/minions', minionsRouter); 
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

apiRouter.use(express.static('client/build'));

module.exports = apiRouter;
