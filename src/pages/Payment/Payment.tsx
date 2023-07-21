import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { CREATE_PAYMENT_SESSION } from "../../GraphQL/Mutations";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/Redux/store";
import "./Payment.css";
import { Box } from "@mui/material";

const publishableApiKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!;

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(publishableApiKey);

export default function Payment() {
  const order = useSelector((state: RootState) => state.order);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [createPaymentSession, { loading, error }] = useMutation(CREATE_PAYMENT_SESSION, {
    variables: {
      amount: order.totalAmount * 100,
    },
    onCompleted: (data: any) => {
      setClientSecret(data.createPaymentSession.paymentIntent);
    }
  })

  useEffect(() => {
    createPaymentSession()
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <Box sx={{display: "flex", alignItems: "center"}}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
}