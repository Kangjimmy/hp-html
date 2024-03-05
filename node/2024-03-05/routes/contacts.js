const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contacts_main');
});
module.exports = router;
