import React, { useEffect } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

type Props = {};

const PaymentSuccess = (props: Props) => {
  const { paymentTokken } = useParams();

  const verifyPayment = async () => {
    try {
      // const dataSnap = await fetch(`${origin}/api`);
      const dataSnap = await fetch("/api/paymentSuccess", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentTokken }),
      });

      const data = await dataSnap.json();

      if (dataSnap.status !== 200 && data.error) {
        alert(data.error);
        throw new Error(data.error);
      }

      return console.log("data is -->", data);
    } catch (error) {
      console.log("something weird happend", error);
    }
  };

  //   navigate("/");

  useEffect(() => {
    verifyPayment();
  }, []);

  return <div>PaymentSuccess</div>;
};

export default PaymentSuccess;
