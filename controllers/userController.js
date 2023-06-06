const Thought = require('../models/thought');
const User = require('../models/user');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

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

    createUser(req, res) {
        User.create(req.body)({
            username: req.body.username,
            email: req.body.email,
        })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(400).json(err));
    },

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
}