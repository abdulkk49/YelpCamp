var mongoose    = require("mongoose");

const URI = "mongodb+srv://abdulkk49:<password>@yelpcamp-bkoyn.mongodb.net/<dbname>?retryWrites=true&w=majority";   

const connectDB = async() =>{
    await mongoose.connect(URI, {
        useUnifiedTopology : true,
        useNewUrlParser : true
    });
    console.log("Database Connected!")
}
// mongoose.connect("mongodb://localhost/yelp_camp");
module.exports = connectDB;