const express = require("express");
const subscriptionController = require("../controllers/subscriptionController");
const authController = require("../controllers/authController");
const stripeController = require("../controllers/stripeController");

const router = express.Router();

router
  .route("/create-subscription")
  .post(authController.protect, stripeController.createSubscription);
router.route("/create-customer").post(stripeController.createCustomer);
router.route("/checkout-session").post(stripeController.checkoutSession);

module.exports = router;
