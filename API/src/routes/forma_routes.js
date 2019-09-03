const express = require('express');
const router = express.Router();
const forma_controller = require('../controllers/forma_controllers');

router.get("/", forma_controller.get);

router.get("/:id", forma_controller.getOne);

router.post("/", forma_controller.insert);

router.put("/:id", forma_controller.update);

router.delete("/:id", forma_controller.deleteForma);

module.exports = router;