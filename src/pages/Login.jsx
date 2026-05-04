import { useState } from "react";
import InputField from "../components/InputField.jsx";
import SocialButtons from "../components/SocialButtons.jsx";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Sign in submitted:", { email, password });
  };

  return (
    <main className="login-page">
      {/* ─── Mobile Hero Image (visible only below lg breakpoint) ─── */}
      <div className="mobile-hero">
        <img
          src="https://picsum.photos/id/1015/1600/2000"
          alt="Floral still-life painting"
          className="mobile-hero__image"
          loading="eager"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="mobile-hero__overlay" aria-hidden="true" />
      </div>

      {/* ─── Login Form Section ─── */}
      <section className="login-form-section" aria-labelledby="login-heading">
        <div className="login-form-container">
          {/* Heading */}
          <header className="login-header">
            <h1 id="login-heading" className="login-title">
              Welcome Back 👋
            </h1>
            <p className="login-subtitle">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form" noValidate>
            {/* Email Field */}
            <InputField
              id="email"
              type="email"
              label="Email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Field */}
            <InputField
              id="password"
              type="password"
              label="Password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Forgot Password Link */}
            <div className="forgot-password-wrapper">
              <a
                href="_blank"
                className="forgot-password-link"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Forgot Password clicked");
                }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="signin-button">
              Sign in
            </button>

            {/* ─── Desktop Divider (visible on lg+) ─── */}
            <div className="divider-desktop" role="separator">
              <span className="divider-line" />
              <span className="divider-text">Or</span>
              <span className="divider-line" />
            </div>

            {/* ─── Mobile "Or sign in with" text (visible below lg) ─── */}
            <p className="mobile-signin-with" aria-hidden="true">
              Or sign in with
            </p>

            {/* Social Login Buttons */}
            <SocialButtons />

            {/* Sign Up Footer */}
            <p className="signup-footer">
              Don't you have an account?{" "}
              <a
                href="#signup"
                className="signup-link"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Sign up clicked");
                }}
              >
                Sign up
              </a>
            </p>
          </form>

          {/* Copyright */}
          <footer className="login-footer">
            <p className="copyright-text">© 2023 ALL RIGHTS RESERVED</p>
          </footer>
        </div>
      </section>

      {/* ─── Desktop Hero Image (visible only at lg breakpoint and above) ─── */}
      <div className="desktop-hero" aria-hidden="true">
        <img
          src="https://picsum.photos/id/1015/1600/2000"
          alt=""
          className="desktop-hero__image"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default Login;

/**
 * Login Page
 *
 * Responsive split-screen login page:
 * - Desktop (≥1024px): Left form + Right hero image (full height)
 * - Mobile (<1024px): Hero image on top + Glassmorphic form card below
 */
