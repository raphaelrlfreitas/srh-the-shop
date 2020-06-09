const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.get('/article/:id', function(req, res, next) {
  const id = req.params.id;


  db
    .query(`SELECT * FROM articles WHERE article_pk = ${id}`)
    .then(data => {
      
      const article = data.rows[0];

      db
        .query(`SELECT * FROM ratings WHERE article_fk = ${id}`)
        .then(data => {
          
          const ratings = data.rows;
          res.render('article', { article, ratings })
        })
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))



});

module.exports = router;