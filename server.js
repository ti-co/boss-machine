const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'browser/build')));

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

const helmet = require('helmet'); 
app.use(helmet());

const compression = require('compression'); 
app.use(compression());

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

// Add middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'browser/build')))};

app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/public/index.html'))})

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
