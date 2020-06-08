var mongoose = require('mongoose');

const url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";

const connectDB = function(){
    mongoose.connect(url, {
    useUnifiedTopology : true,
    useNewUrlParser : true
    },function(err,res){
      if(err){
          console.log(err);
      }
      else{
          console.log("Database connected successfully!!");
      }
  });
};


module.exports = connectDB;


