import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

import "./App.scss";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ForgotPassword from "./components/pages/ForgotPassword";
import SubscribePage from "./components/pages/Subscribe";
import PaymentSuccess from "./components/pages/PaymentSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route
          path="/paymentSuccess/:paymentTokken"
          element={<PaymentSuccess />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
