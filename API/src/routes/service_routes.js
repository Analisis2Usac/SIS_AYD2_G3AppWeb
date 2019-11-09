const express = require('express');
const router = express.Router();
const service_controller = require('../controllers/service_controllers');

router.get("/", service_controller.get);

router.get("/:id", service_controller.getOne);

router.get("/Cate/:id", service_controller.getOneCat);

router.post("/", service_controller.insert);

router.put("/:id_servicio", service_controller.update);

router.delete("/:id", service_controller.deleteServ);

module.exports = router;