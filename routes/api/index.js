const router = require('express').Router();
const friendsRoute = require('./friends');
const reactionsRoute = require('./reactions');
const usersRoute = require('./users');

router.use('/friends', friendsRoute);
router.use('/reactions', reactionsRoute);
router.use('/users', usersRoute);

module.exports = router;
