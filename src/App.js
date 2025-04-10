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

const SignUpScreen = ({ onNavigate }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (pw) => ({
    length: pw.length >= 8,
    uppercase: /[A-Z]/.test(pw),
    lowercase: /[a-z]/.test(pw),
    number: /[0-9]/.test(pw),
    special: /[!@#$%^&*]/.test(pw),
  });

  const validation = validatePassword(password);
  const isPasswordValid = Object.values(validation).every(Boolean);
  const passwordsMatch = password === confirmPassword;

  return (
    <div className="screen signup slide-in">
      <img src={logo} alt="Logo" className="logo small" />
      <h2 className="signup-title">Register</h2>
      <input className="input-field" type="text" placeholder="First Name" />
      <input className="input-field" type="text" placeholder="Last Name" />
      <input className="input-field" type="email" placeholder="Email" />
      <input className="input-field" type="tel" placeholder="Phone Number" />
      <input className="input-field" type="date" placeholder="Date of Birth" />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="password-policy">
        <p><strong>Password Policies:</strong></p>
        <ul>
          <li className={validation.length ? "valid" : "invalid"}>Must have at least 8 characters</li>
          <li className={validation.uppercase ? "valid" : "invalid"}>Must include at least one uppercase letter (A-Z)</li>
          <li className={validation.lowercase ? "valid" : "invalid"}>Must include at least one lowercase letter (a-z)</li>
          <li className={validation.number ? "valid" : "invalid"}>Must include at least one number (0-9)</li>
          <li className={validation.special ? "valid" : "invalid"}>Must include at least one special character (!@#$%^&*)</li>
        </ul>
      </div>

      {!isPasswordValid && password && (
        <p className="error-message">Password does not meet all requirements.</p>
      )}
      {password && confirmPassword && !passwordsMatch && (
        <p className="error-message">Passwords do not match.</p>
      )}

      <button
        className="btn primary"
        onClick={() => onNavigate("validation")}
        disabled={!isPasswordValid || !passwordsMatch}
      >
        Next
      </button>
      <p className="link" onClick={() => onNavigate("login")}>
        Already have an account? Log In
      </p>
    </div>
  );
};

const ValidationScreen = () => (
  <div className="screen validation slide-in">
    <img src={logo} alt="Logo" className="logo small" />
    <p>A One-Time Pin (OTP) has been sent to your <br />email. Please enter the code.</p>
    
    <div className="otp-container">
      {[...Array(4)].map((_, i) => (
        <input key={i} className="otp-inputs" type="text" inputMode="numeric" pattern="[0-9]{1}" maxLength="1" required />
      ))}
    </div>

    <button className="btn primary">Proceed</button>

    <div className="info-box">
      <h2 className="info-correct">Is this information <br />correct?</h2>
      <div className="info-container">
        <div className="btn-edit-container">
          <button className="btn edit">Edit</button>
        </div>
        <p className="info-categ">First Name:<span className="user-input"><br />Rose</span></p>
        <p className="info-categ">Last Name:<span className="user-input"><br />Dela Cruz</span></p>
        <p className="info-categ">Email:<span className="user-input"><br />rosedelacruz@gmail.com</span></p>
        <p className="info-categ">Phone number:<span className="user-input"><br />09445637821</span></p>
        <p className="info-categ">Date of Birth:<span className="user-input"><br />05/30/2003</span></p>
      </div>
    </div>
  </div>
);

const App = () => {
  const [screen, setScreen] = useState("splash");

  const renderScreen = () => {
    switch (screen) {
      case "welcome": return <WelcomeScreen onNavigate={setScreen} />;
      case "login": return <LoginScreen onNavigate={setScreen} />;
      case "signup": return <SignUpScreen onNavigate={setScreen} />;
      case "validation": return <ValidationScreen />;
      default: return <SplashScreen onFinish={() => setScreen("welcome")} />;
    }
  };

  return renderScreen();
};

export default App;
