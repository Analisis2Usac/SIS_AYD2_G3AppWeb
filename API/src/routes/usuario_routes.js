const express = require('express');
const router = express.Router();
const usu_controller = require('../controllers/usu_controllers');

router.get("/", usu_controller.get);

router.get("/:id", usu_controller.getOne);

router.post("/", usu_controller.insert);

router.put("/:id", usu_controller.update);

router.delete("/:id", usu_controller.deleteUsu);

module.exports = router;