import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScreenLoader from "../../shared/ScreenLoader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Props = {};

const PaymentSuccess = (props: Props) => {
  const { paymentTokken } = useParams();
  const [isVisibile, setIsVisible] = useState<boolean>(true);

  const verifyPayment = async () => {
    try {
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
      setIsVisible(false);
      return console.log("data is -->", data);
    } catch (error) {
      console.log("something weird happend", error);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <>
      <ScreenLoader isVisible={isVisibile} />
      {!isVisibile && (
        <div className="paymentSuccess">
          <CheckCircleIcon />
          <h1 className="text-light">
            Payment has been Successfully Deposite.
          </h1>
          <Link className="btn-own" to={`/login`}>
            Go to Dashboard
          </Link>
        </div>
      )}
    </>
  );
};

export default PaymentSuccess;
