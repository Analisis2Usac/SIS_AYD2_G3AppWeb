const express = require('express');
const router = express.Router();
const empresa_controller = require('../controllers/empresa_controllers');

router.get("/", empresa_controller.get);

router.get("/:id", empresa_controller.getOne);

router.post("/", empresa_controller.insert);

router.put("/:id_empresa", empresa_controller.update);

router.delete("/:id", empresa_controller.deleteEmp);

module.exports = router;