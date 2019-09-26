const express = require('express');
const router = express.Router();
const comen_controller = require('../controllers/comen_controllers');

router.get("/", comen_controller.get);

router.get("/:id", comen_controller.getOne);

router.post("/", comen_controller.insert);

router.put("/:id", comen_controller.update);

router.delete("/:id", comen_controller.deleteComen);

module.exports = router;