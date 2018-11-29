var mongoose = require('mongoose');

var StoreSchema = new mongoose.Schema({
  _id: ObjectId,
  Address: String,
  City: String,
  Country: String,
  'Manager First Name': String,
  'Manager Last Name': String,
  managerStaffId: Number,
  Phone: String,
  inventory:{
    film_id: Number,
    store_id: Number,
    _id: ObjectId,
    'last_update':{
      date:{ type: Date, default: Date.now },
      timezone_type: Number,
      timezone: String
    }
  },
  staff:{
    Address: String,
    City: String,
    Country: String,
    'First Name': String,
    'Last Name': String,
    staffId: Number,
    Phone: String,
    _id: ObjectId
  },
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Store', StoreSchema);
