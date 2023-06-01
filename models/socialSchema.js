//Define Mongoose
const mongoose = require('mongoose');

//create a new instance of the Mongoose schema
const userSchema = new mongoose.Schema({
    // individual properties and their types
    //setting require tue disalows null values
    username: { type: String, required: True},
    email: { type: String, required: True},
    


    //built in date method to get current date
    lastAccessed: { type: Date, default: Date.now },
});




//using mongoose.model() to compile a model based on the schema
// '*' name of model
// User is name of schema were using to create a new instance of the model


//error handler functoin for when error occurs
const handleError = (err) => console.error(err);

//use model to create individual documents that have properties defined in schema
User
    .create({

    })
    .then(result => console.log('Created new user', result))
    .catch(err => handleError(err));





//export individual documents
module.exports = User;
