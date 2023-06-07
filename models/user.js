//Define Mongoose
const { Schema, model } = require('mongoose');

//create a new instance of the Mongoose schema
const userSchema = new mongoose.Schema({
    // individual properties and their types
    //setting require tue disalows null values
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid e-mail address'],
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],

    //built in date method to get current date
    lastAccessed: { type: Date, default: Date.now },
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

//virtual property friendCiount that gets the number of users friends
User.virtual('friendCount').get(function() {
    return this.friends.length;
});


//using mongoose.model() to compile a model based on the schema
// '*' name of model
// User is name of schema were using to create a new instance of the model
const User = model('User', userSchema);


//error handler function for when error occurs
const handleError = (err) => console.error(err);

//use model to create individual documents that have properties defined in schema
User
    .create({

    })
    .then(result => console.log('Created new user', result))
    .catch(err => handleError(err));





//export individual documents
module.exports = User;
