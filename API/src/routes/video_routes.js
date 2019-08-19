const express = require('express');
const router = express.Router();
const video_controller = require('../controllers/video_controllers');

router.get("/", video_controller.get);

router.get("/:id", video_controller.getOne);

router.post("/", video_controller.insert);

router.put("/:id", video_controller.update);

router.delete("/:id", video_controller.deleteUsu);

module.exports = router;