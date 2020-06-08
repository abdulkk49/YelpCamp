var mongoose    = require("mongoose");

const URI = "mongodb+srv://abdulkk49:abdulkk49@yelpcamp-bkoyn.mongodb.net/yelp_camp?retryWrites=true&w=majority";   

const connectDB = async() =>{
    await mongoose.connect(URI, {
        useUnifiedTopology : true,
        useNewUrlParser : true
    });
    console.log("Database Connected!")
}
// mongoose.connect("mongodb://localhost/yelp_camp");
module.exports = connectDB;