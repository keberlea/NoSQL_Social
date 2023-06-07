const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    
    //get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(400).json(err));
    },

    //create user
    createUser(req, res) {
        User.create(req.body)({
            username: req.body.username,
            email: req.body.email,
        })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(400).json(err));
    },

    //update user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId }, 
            {
              username: req.body.username,
              email: req.body.email
            }, 
            { new: true }, 
            (err, result) => {
              if (result) {
                res.status(200).json(result);
                console.log(`Updated: ${result}`);
              } else {
                console.log(err);
                res.status(500).json({ message: 'error', err });
              }
            }
        )
    },

    // delete user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => {
                !user
                ? res.status(404).json({ message: 'No user found with this id!' })
                : Thought.deleteMany( { username: user.username})
                  .then((thoughts) => 
                    !thoughts
                    ? res.status(404).json({ message: 'No thoughts for that user' })
                    : res.json(user)
                  )
            })
            .catch((err) => res.status(500).json(err));
    },



    //add friend
    addFriend(req, res) {
        User.findOne({ _id: req.params.friendId })
          .select('-__v')
          .then((user) => {
              return User.findOneAndUpdate (
                { _id: req.params.userId}, 
                {$addToSet: {
                    friends: user._id
                }},
                { new: true} 
              );
          }).then((user) => 
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },

    //delete friend
    deleteFriend(req, res) {
        User.findOne({ _id: req.params.friendId })
          .select('-__v')
          .then((user) => {
              return User.findOneAndUpdate (
                { _id: req.params.userId}, 
                {$pull: {
                    friends: user._id
                }},
                { new: true} 
              );
          }).then((user) => 
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    }
};