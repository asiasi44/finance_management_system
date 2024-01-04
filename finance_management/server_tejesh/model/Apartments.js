const mongoose = require("mongoose");
const ApartmentSchema = mongoose.Schema({
  a_id: {
    type: String,
  },
  price: {
    type: String,
  },
  no_of_rooms: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  negotiable: {
    type: Boolean,
  },
});
