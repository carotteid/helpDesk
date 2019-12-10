const Models = require('./model');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express(); // Crea servidor

app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require('./routes/User');
app.use('/User', user);
const company = require('./routes/Company');
app.use('/Company', company);
const category = require('./routes/Category');
app.use('/Category', category);
const department = require('./routes/Department');
app.use('/Department', department);
const ticket = require('./routes/Ticket');
app.use('/Ticket', ticket);
const monitor = require('./routes/Monitor');
app.use('/Monitor', monitor);

(async () => {
    await Models.sequelize.sync({
        force: true
      });
      console.log('Models created correctly');
})();

app.listen(5000, () => console.log('Server is up 2'));

app.use('/', (req, res, next) => {
  res.json({"result": "success"});
});