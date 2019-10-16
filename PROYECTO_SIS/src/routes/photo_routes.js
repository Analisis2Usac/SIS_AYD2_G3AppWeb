const express = require('express');
const router = express.Router();
const photo_controller = require('../controllers/photo_controllers');

router.get("/", photo_controller.get);

router.get("/:id", photo_controller.getOne);

router.post("/", photo_controller.insert);

router.put("/:id_foto", photo_controller.update);

router.delete("/:id", photo_controller.deleteFoto);

module.exports = router;