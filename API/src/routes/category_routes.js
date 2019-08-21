const express = require('express');
const router = express.Router();
const category_controller = require('../controllers/category_controllers');

router.get("/", category_controller.get);

router.get("/:id", category_controller.getOne);

router.post("/", category_controller.insert);

router.put("/:id_categoria", category_controller.update);

router.delete("/:id", category_controller.deleteCate);

module.exports = router;