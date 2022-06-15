import { loadStripe } from "@stripe/stripe-js";

const initializeStripe = async () => {
  return await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "");
};

export default initializeStripe;
