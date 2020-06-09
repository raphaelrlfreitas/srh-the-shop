const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.get('/', function(req, res, next) {

  db.query('select article_pk, teaser, price, caption from articles', (err, result) => {
    if(err){
      next(err);
    }

    res.render('index', { articles: result.rows });
  })

});

module.exports = router;
