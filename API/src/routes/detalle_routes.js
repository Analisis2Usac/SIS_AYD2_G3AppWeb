const express = require('express');
const router = express.Router();
const detalle_controller = require('../controllers/detalle_controllers');

router.get("/", detalle_controller.get);

router.get("/:id", detalle_controller.getOne);

router.post("/", detalle_controller.insert);

router.put("/:id", detalle_controller.update);

router.delete("/:id", detalle_controller.deleteDetalle);

module.exports = router;