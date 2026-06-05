const express = require('express');
const router = express.Router();
const store = require('../data/store');

router.get('/', (req, res) => {
  const todos = store.getAll();
  res.render('index', { todos });
});

router.post('/add', (req, res) => {
  store.add(req.body.text);
  res.redirect('/');
});

router.post('/:id/done', (req, res) => {
  store.done(Number(req.params.id));
  res.redirect('/');
});

router.post('/:id/delete', (req, res) => {
  store.remove(Number(req.params.id));
  res.redirect('/');
});

module.exports = router;
