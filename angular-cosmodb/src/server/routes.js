const express = require('express');
const router = express.Router();

const heroService = require('./hero.service');

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
  // res.send(200, [
  //   {"id":10, "name": "Dereje", "saying":"Great day"}
  // ])
});

router.post('/hero', (req, res) => {
  heroService.postHero(req, res);
});

router.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});

module.exports = router;