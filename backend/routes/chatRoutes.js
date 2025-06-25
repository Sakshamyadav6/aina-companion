const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const chatControllers = require("../controllers/chatControllers");

// Protected send endpoint
router.post("/create", auth, chatControllers.createConversation);
router.post("/send", auth, chatControllers.sendMessage);

module.exports = router;
