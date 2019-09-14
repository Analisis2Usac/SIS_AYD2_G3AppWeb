const express = require('express');
const router = express.Router();
const listservice_controller = require('../controllers/list-service_controllers');

router.get("/", listservice_controller.get);

router.get("/:id/:id2", listservice_controller.getOne);

router.post("/", listservice_controller.insert);

router.put("/:id_empresa/:id_servicio", listservice_controller.update);

router.delete("/:id/:id2", listservice_controller.deleteListServ);

module.exports = router;