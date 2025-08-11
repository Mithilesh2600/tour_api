const mongoose = require('mongoose');
const slugify = require('slugify');

const TourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have  a name!!'],
      trim: true,
      unique: true
    },
    slug: String,
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
TourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

TourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// TourSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// TourSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });
const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
