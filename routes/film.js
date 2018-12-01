var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Film = require('../models/Film.js');
var Store = require('../models/Stores.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Film.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {

  var query = Store.find({});
  query.where({ 'updated_at': { $gte : new Date(2004, 7, 14) }  })
  query.exec(function (err, docs) {
    res.json(docs);
  });


});

module.exports = router;


/*

First Working Query

var query = Film.find({});
query.where('Category', 'Documentary');
//query.limit(5);
query.exec(function (err, docs) {
  res.json(docs);
});

Second Working Query

var query = Store.find({});
query.where('Country', 'Canada');
//query.limit(5);
query.exec(function (err, docs) {
  res.json(docs);
});

Third Working Query

var query = Store.find({});
query.where({ 'updated_at': { $gte : new Date(2004, 7, 14) }  })
query.exec(function (err, docs) {
  res.json(docs);
});

Fourth Working Query

var query = Film.find({});
query.find( { "actors.First name": "PENELOPE", "actors.Last name": "GUINESS" })
query.exec(function (err, docs) {
  res.json(docs);
});

*/
