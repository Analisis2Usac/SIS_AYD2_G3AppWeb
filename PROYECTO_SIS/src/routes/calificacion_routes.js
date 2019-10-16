const express = require('express');
const router = express.Router();
const cali_controller = require('../controllers/cali_controllers');

router.get("/", cali_controller.get);

router.get("/:id", cali_controller.getOne);

router.post("/", cali_controller.insert);

router.put("/:id", cali_controller.update);

router.delete("/:id", cali_controller.deleteCali);

module.exports = router;