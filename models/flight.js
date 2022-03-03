import mongoose from "mongoose";

import mongoose from "mongoose";

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
});

const flight = mongoose.model("Flight", flightSchema);

export {
  Flight
}