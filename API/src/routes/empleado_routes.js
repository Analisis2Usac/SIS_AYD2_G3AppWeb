const express = require('express');
const router = express.Router();
const empleado_controller = require('../controllers/empleado_controllers');

router.get("/", empleado_controller.get);

router.get("/:id", empleado_controller.getOne);

router.post("/", empleado_controller.insert);

router.put("/:id_empleado", empleado_controller.update);

router.delete("/:id", empleado_controller.deleteEmpl);

module.exports = router;