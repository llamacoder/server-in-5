const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('div'));
app.disable('x-powered-by');

app.get('/sauces', (req, res, next) => {
  res.sendStatus(200);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({error: err});
});

app.listen(port, () => console.log(`listening on port ${port}`));
