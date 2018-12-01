var mongoose = require('mongoose');

var FilmSchema = new mongoose.Schema({
  _id: String,
  Category: String,
  Length: Number,
  Rating: String,
  'Rental Duration': Number,
  'Replacement Cost': Number,
  'Special Features': String,
  Title: String,
  actors:{
    id: String,
    FirstName: String,
    actorId: Number,
    LastName: String
  }
});

module.exports = mongoose.model('Film', FilmSchema);
