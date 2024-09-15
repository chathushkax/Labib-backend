const Stripe = require("stripe");
const createCheckout = async (req, res, next) => {
  try {
    const payload = req.body;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      currency: payload.currency,
      amount: payload.amount,
      automatic_payment_methods: { enabled: true },
    });

    // return { paymentIntent };
    res.send(paymentIntent);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createCheckout,
};
