const express = require('express');
const router = express.Router();
const subscription_controller = require('../controllers/subscription_controllers');

router.get("/", subscription_controller.get);

router.get("/:id", subscription_controller.getOne);

router.post("/", subscription_controller.insert);

router.put("/:id_suscripcion", subscription_controller.update);

router.delete("/:id", subscription_controller.deleteSubs);

module.exports = router;