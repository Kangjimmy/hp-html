const express = require('express');
const mysql = require('./mysqlconn');

const router = express.Router();

router.get('/', (req, res) => {
  mysql.query('select * from book', (err, results) => {
    if (!err) {
      res.render('list', { data: results });
    } else {
      console.log('Error');
    }
  });
});

router.get('/add', (req, res) => {
  res.render('add');
});

router.post('/add', (req, res) => {
  let sql =
    'insert into book () values(?,?,?,?, date_format(now(), "%Y-%m-%d"))';
  let params = [
    req.body.no,
    req.body.title,
    req.body.publisher,
    req.body.price,
  ];
  mysql.query(sql, params, (err, results, fields) => {
    if (!err) {
      console.log('insert success..!');
      res.redirect('/');
    } else {
      console.log('Error');
    }
  });
});

router.get('/delete/:bookid', (req, res) => {
  let sql = 'delete from book where bookid = ?';
  let params = [req.params.bookid];
  mysql.query(sql, params, (err, results, fields) => {
    if (!err) {
      console.log('delete success..!');
      res.redirect('/');
    } else {
      console.log('error!!');
      console.log(err);
    }
  });
});

router.get('/update/:bookid', (req, res) => {
  let sql = 'select * from book where bookid=?';
  let params = [req.params.bookid];
  mysql.query(sql, params, (err, results, fields) => {
    if (!err) {
      let data = results[0];
      console.log(data);
      res.render('update', { data });
    }
  });
});

router.post('/update/:bookid', (req, res) => {
  let sql = 'update book set bookname=?, publisher=?, price=? where bookid=?';
  const { no, title, publisher, price } = req.body;
  let params = [title, publisher, Number(price), Number(no)];
  mysql.query(sql, params, (err, results, fields) => {
    if (!err) {
      res.redirect('/');
    } else {
      console.log('Error!!');
      console.log(err);
    }
  });
});

module.exports = router;
