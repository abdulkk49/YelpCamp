var mongoose = require('mongoose');

// var URI = "mongodb+srv://abdulkk49:abdulkk49@yelpcamp-bkoyn.mongodb.net/yelp_camp?retryWrites=true&w=majority";

const connectDB = function(){
        mongoose.connect(process.env.DATABASEURL, {
        useUnifiedTopology : true,
        useNewUrlParser : true
  });
};
// mongoose.connect("mongodb://localhost/yelp_camp");
module.exports = connectDB;


