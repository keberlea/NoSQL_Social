//Define Mongoose
const { Schema, model } = require('mongoose');

//create a new instance of the Mongoose schema
const userSchema = new Schema({
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
          ref: 'thought',
        },
      ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
  },
  {
    toJSON: {
        virtuals: true,
       // getters: true,
    },
    id: false,
  }
);

//virtual property friendCiount that gets the number of users friends
userSchema
  .virtual('friendCount')
  .get(function() {
    return this.friends.length;
});


//initialize user model
const User = model('user', userSchema);



//export individual documents
module.exports = User;
