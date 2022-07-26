import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScreenLoader from "../../shared/ScreenLoader";
import { Modal, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./paymentSuccess.scss";

type Props = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "#fff",
  outline: "0px",
  border: "0px",
  backgroundColor: "#313667",
  borderRadius: "50px 0px 50px 0px",
  p: 4,
};

const PaymentSuccess = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { paymentTokken } = useParams();
  const [isVisibile, setIsVisible] = useState<boolean>(true);

  const verifyPayment = async () => {
    const APIURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : process.env.REACT_APP_API_URL;
    try {
      const dataSnap = await fetch(`${APIURL}/api/paymentSuccess`, {
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
      setIsModalOpen(true);
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
          <h1 className="text-light">Your payment has been received.</h1>
          <p className="text-center text-danger">
            We sent you an email containing your password.
          </p>
          <Link className="btn-own" to={`/login`}>
            Go to Login
          </Link>
        </div>
      )}

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="paymentSuccess__modalContainer">
          <Box sx={style} component="form">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
              className="paymentSuccess__modalContainer__closeBtn"
            >
              &#10060;
            </button>
            <p>
              Thank you for joining our community and becoming a JobGenie
              Developer. Within the next 24 hours, you will be given access to
              our source codes! Once you have access you can customize them to
              your liking and complete the cash challenges for a chance to win
              $$$.
            </p>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default PaymentSuccess;
