import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import Navbar from "../components/_App/Navbar";
import apiClient from "./api/api";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      apiClient
        .post("/api/auth/sign-in", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
        });
    });
  };
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
      />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Log In to your account!</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="name"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Remember Me</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password">
                        <a className="forget">Forgot my password?</a>
                      </Link>
                    </div> */}

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Login
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Not a member?
                        <Link href="/sign-up">
                          <a>Sign Up</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignIn;
