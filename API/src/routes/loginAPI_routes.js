const express = require('express');
const router = express.Router();
const usu_controller = require('../controllers/loginApli_controllers.js');

router.post("/", usu_controller.post);

module.exports = router;