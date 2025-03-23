import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="screen splash fade-in">
      <img src={logo} alt="Logo" className="logo animated" />
      <h1 className="splash-title">EUDAEMONIA</h1>
      <div className="loading-spinner"></div>
    </div>
  );
};

const WelcomeScreen = ({ onNavigate }) => (
  <div className="screen welcome slide-in">
    <img src={logo} alt="Logo" className="logo" />
    <h2 className="welcome-title">WELCOME</h2>
    <p>We are here to aid you.</p>
    <button className="btn primary" onClick={() => onNavigate("login")}>Log In</button>
    <button className="btn secondary" onClick={() => onNavigate("signup")}>Sign Up</button>
    <button className="btn google" onClick={() => onNavigate("google-signin")}>Sign In with Google</button>
  </div>
);

const LoginScreen = ({ onNavigate }) => (
  <div className="screen login slide-in">
    <img src={logo} alt="Logo" className="logo small" />
    <h2 className="login-title">Log In</h2>
    <input className="input-field" type="email" placeholder="Email or phone number" />
    <input className="input-field" type="password" placeholder="Password" />
    <button className="btn primary">Log In</button>
    <p className="link" onClick={() => onNavigate("forgot-password")}>Forgot Password?</p>
  </div>
);

const SignUpScreen = ({ onNavigate }) => (
  <div className="screen signup slide-in">
    <img src={logo} alt="Logo" className="logo small" />
    <h2 className="signup-title">Register</h2>
    <input className="input-field" type="text" placeholder="First Name" />
    <input className="input-field" type="text" placeholder="Last Name" />
    <input className="input-field" type="email" placeholder="Email" />
    <input className="input-field" type="tel" placeholder="Phone Number" />
    <input className="input-field" type="date" placeholder="Date of Birth" />
    <input className="input-field" type="password" placeholder="Password" />
    <input className="input-field" type="password" placeholder="Confirm Password" />
    <div className="password-policy">
      <p><strong>Password Must Include:</strong></p>
      <ul>
        <li>8+ characters</li>
        <li>1 uppercase (A-Z)</li>
        <li>1 lowercase (a-z)</li>
        <li>1 number (0-9)</li>
        <li>1 special (!@#$%^&*)</li>
      </ul>
    </div>
    <button className="btn primary" onClick={() => onNavigate("verification")}>Next</button>
    <p className="link" onClick={() => onNavigate("login")}>Already have an account? Log In</p>
  </div>
);

const App = () => {
  const [screen, setScreen] = useState("splash");

  const renderScreen = () => {
    switch (screen) {
      case "welcome": return <WelcomeScreen onNavigate={setScreen} />;
      case "login": return <LoginScreen onNavigate={setScreen} />;
      case "signup": return <SignUpScreen onNavigate={setScreen} />;
      default: return <SplashScreen onFinish={() => setScreen("welcome")} />;
    }
  };

  return <div className="container">{renderScreen()}</div>;
};

export default App;
