const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} =  require('../../controllers/userController');

//  `/api/users`
// `GET` all users
// `POST` a new user:
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);
// `PUT` to update a user by its `_id`
router.route('/:userId').put(updateUser);
//  `DELETE` to remove user by its `_id`
router.route('/:userId').delete(deleteUser);


// `GET` a single user by its `_id` and populated thought and friend data
// /api/users/:userId/friends/friendId
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(deleteFriend);







// BONUS: Remove a user's associated thoughts when deleted.



/*
example data



{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```
*/