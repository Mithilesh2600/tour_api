const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have  a name!!'],
    trim: true,
    unique: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration!']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have maximum-Group SIze!']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty!']
  },
  ratingAverage: {
    type: Number,
    default: 4.5
  },
  ratingQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price!!']
  },
  priceDiscount: {
    type: Number
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'The tour must have a Summary!']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a Cover Image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
