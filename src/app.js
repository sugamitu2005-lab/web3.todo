const express = require('express');
const path = require('path');
const app = express();
const todoRoutes = require('./routes/todos');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', todoRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
