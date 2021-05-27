import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Ivn3pDoSqiWBrhlno9jO3eA7uNBH8Vb4WicHPNJmbzYf6x06nYZBjckAtqgnna9JgXctE4DRmpF8zDmExRMJA3k00qO1n8chb"
);
export const cardTokenRequest = (card) => stripe.createToken({ card });
