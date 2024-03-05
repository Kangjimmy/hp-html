const express = require('express');
const router = express.Router();

router.get('/setUserCookie', (req, res) => {
  res.cookie('HELLOCODING', 'ACADEMY', { maxAge: 1000 * 60 * 60 * 24 * 30 });
  res.redirect('showUserCookie');
});

router.get('/showUserCookie', (req, res) => {
  res.send(req.cookies);
});

module.exports = router;
