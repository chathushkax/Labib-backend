const express = require("express");
const router = express();

const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");
const { createCheckout } = require("../controllers/paymentController");

router.post("/checkout", createCheckout);
module.exports = router;
