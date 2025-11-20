import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OAuthSuccessWrapper from "./components/OAuthSuccessWrapper";
import OTPVerify from "./pages/OTPVerify";
import ScrollToTopButton from "./layout/ScrollToTopButton";
import Terms from "./pages/Terms";
import CreateCard from "./pages/CreateCard";
import PublicProfile from "./pages/PublicProfile";
import HowItWorks from "./pages/HowItWorks";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import MyProfiles from "./pages/dashboard/MyProfiles";
import EditProfile from "./pages/dashboard/EditProfile";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";

const AppContent = () => {
  const location = useLocation();
  const hideNavbarFooterPaths = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/dashboard",
    "/u/",
  ];

  const shouldHideNavbarFooter = hideNavbarFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const isUser = user?.role === "user";

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/oauth-success" element={<OAuthSuccessWrapper />} />
        <Route path="/verify-otp" element={<OTPVerify />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/u/:slug" element={<PublicProfile />} />
        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="profiles" element={<MyProfiles />} />
          <Route path="profiles/:id" element={<EditProfile />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
      <ScrollToTopButton />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
