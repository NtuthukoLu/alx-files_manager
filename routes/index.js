const express = require('express');

const router = express.Router();

// Require controllers
const AppController = require('../controllers/AppController');
const UserController = require('../controllers/UsersController');

// Endpoints
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users',UserController.postNew);

module.exports = router;