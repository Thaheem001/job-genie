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
import SubDec from "./components/pages/Dashboard/Sub-Disc";
import Profile from "./components/pages/Dashboard/Profile";
import Challenges from "./components/pages/Dashboard/Challenges";

import CashChallenges from "./components/pages/Dashboard/Challenges/Cash";
import SubmitChallenge from "./components/pages/Dashboard/Sub-Disc/SubmitChallenge";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Router  */}
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/paymentSuccess/:paymentTokken"
          element={<PaymentSuccess />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Protected Routed  */}

        <Route path="/" element={<PrivateRoute />}>
          <Route path="home" element={<DashboardPage />} />
          <Route path="challenges/practice" element={<Challenges />} />
          <Route path="challenges/Cash" element={<CashChallenges />} />
          <Route path="challenge/submit/:id" element={<SubmitChallenge />} />
          <Route path="sub-dic" element={<SubDec />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
