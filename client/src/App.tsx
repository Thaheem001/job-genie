import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import "../src/components/style/App.scss";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ForgotPassword from "./components/pages/ForgotPassword";
import PaymentSuccess from "./components/pages/PaymentSuccess";
import DashboardPage from "./components/pages/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<DashboardPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
