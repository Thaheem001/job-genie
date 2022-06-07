import React, { useEffect, useState } from "react";
// import stripe from "../../utils/initializeStripe";
import HomeLayout from "../../layout/HomeLayout";
import initializeStripe from "../../utils/initializeStripe";

type Props = {};

const SubscribePage = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const redirectToPayment = async (status: number, stripePass: string) => {
    const stripe = await initializeStripe();
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: stripePass });
    } else {
      throw new Error("Something Went Wrong");
    }
  };

  const payForSubscription = async (data: any) => {
    console.log(data);
    try {
      const res = await fetch("/api/paynow", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resObj = await res.json();
      if (resObj.status !== "success") {
        return console.log("Something went very wrong!", resObj);
      }

      const stripe = await initializeStripe();
      stripe?.redirectToCheckout({ sessionId: resObj.stripeId });
    } catch (error) {
      return console.log("something went wrong here ", error);
    }
  };

  return (
    <HomeLayout>
      <div style={{ marginTop: "20rem" }}>
        <h2>Subscribe !</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            payForSubscription({ email, fullName })
              .then((res) => console.log(res))
              .catch((err) => console.log(err.message));
          }}
        >
          <input
            name="fullName"
            type={"text"}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            name="email"
            type={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input type={"submit"} value="Pay Now" />
        </form>
      </div>
    </HomeLayout>
  );
};

export default SubscribePage;
