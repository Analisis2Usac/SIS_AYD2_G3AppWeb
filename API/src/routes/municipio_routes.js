const express = require('express');
const router = express.Router();
const muni_controller = require('../controllers/muni_controller');

router.get("/", muni_controller.get);

router.get("/:id", muni_controller.getOne);

router.post("/", muni_controller.insert);

router.put("/:id", muni_controller.update);

router.delete("/:id", muni_controller.deleteMuni);

module.exports = router;