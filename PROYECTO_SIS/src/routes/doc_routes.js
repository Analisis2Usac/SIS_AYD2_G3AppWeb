const express = require('express');
const router = express.Router();
const doc_controller = require('../controllers/doc_controllers');

router.get("/", doc_controller.get);

router.get("/:id", doc_controller.getOne);

router.post("/", doc_controller.insert);

router.put("/:id_documento", doc_controller.update);

router.delete("/:id", doc_controller.deleteDoc);

module.exports = router;