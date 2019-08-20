const express = require('express');
const router = express.Router();
const listservice_controller = require('../controllers/list-service_controllers');

router.get("/", listservice_controller.get);

router.get("/:id", listservice_controller.getOne);

router.post("/", listservice_controller.insert);

router.put("/:id", listservice_controller.update);

router.delete("/:id", listservice_controller.deleteListServ);

module.exports = router;