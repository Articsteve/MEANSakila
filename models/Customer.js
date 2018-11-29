var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  id: String,
  Address: String,
  City: String,
  Country: String,
  District: String,
  'First Name': String,
  'Last Name': String;
  Phone: String;
  rentals:{
    'Film Title': String,
    filmId: String,
    'Rental Date':{
      date:{ type: Date, default: Date.now },
      timezone_type: Number,
      timezone: String
    },
    rentalId: Number,
    'Return Date':{
      date:{ type: Date, default: Date.now },
      timezone_type: Number,
      timezone: String
    },
    staffId: Number,
    payments:{
      Amount: Number,
      'Payment Date':{
        date:{ type: Date, default: Date.now },
        timezone_type: Number,
        timezone: String
      },
      _id: ObjectId,
      'Payment Id': Number
    }
  },
  _id: ObjectId
});

module.exports = mongoose.model('Customer', CustomerSchema);
