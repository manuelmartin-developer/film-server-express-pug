const express = require('express');
const router = require('./routes/router');
const bodyParser = require("body-parser");


const app = express();
const port = 3003;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.get('*',  (req, res) => {
  res.status(404).send('Sorry, 404 no tá!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })