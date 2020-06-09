const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.get('/article/:id', function(req, res, next) {

  db.query(`select article_pk, description, price, caption from articles where article_pk = ${req.params.id}`, (err, result) => {
    if(err){
      next(err);
    }

    res.render('article', { article: result.rows[0] });
  })

});

module.exports = router;