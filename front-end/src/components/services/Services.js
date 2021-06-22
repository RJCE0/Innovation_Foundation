import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import "../../css/employers.css";

const cls1 = {
  fill: "f9f9f9",
};

class Register extends Component {
  render() {
    return (
      <div>
        <div id="headerContainer">
          <div id="header-swirl-backdrop" style={{ overflow: "hidden" }}>
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920.08 715"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="960.04"
                  y1="714.5"
                  x2="960.04"
                  y2="-0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#505050" />
                  <stop offset="1" stopColor="#121212" />
                </linearGradient>
              </defs>
              <path
                style={{ fill: "url(#linear-gradient)" }}
                d="M0,577.19,289.6,686.57c105.28,39.5,231.58,37,333.6-6.72l331-141.73c95.21-40.76,212-45.86,313.45-13.69l271.14,86c83.82,26.6,200.77-5.9,291.39-39.12,27.67-10.14,61.49-10.83,89.85-1.73V-.5H0Z"
                transform="translate(0 0.5)"
              />
            </svg>
          </div>

          <Navbar />

          <div id="header-main-content" style={{ textAlign: "center" }}>
            <div className="header-titleContainer">
              <div className="headerWrapper">
                <span className="main-headerTitle" style={{ fontSize: "70px" }}>
                  Providing for the Youth
                </span>
              </div>
              <span
                className="sub-headerTitle"
                style={{ display: "block", fontSize: "30px" }}
              >
                Filling the gap of opportunities missed by many around the UK
              </span>

              <a
                className="btn fill-btn"
                style={{ display: "inline-block", marginTop: "20px" }}
                href="/discover"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>

        <div id="main-contentContainer">
          <div id="main-containerTitle">
            <span className="ts">Our Mission</span>
            <span
              className="ts"
              style={{
                width: "50%",
                display: "block",
                margin: "0 auto",
                fontSize: "20px",
                color: "#338CD1",
              }}
            >
              Innovation Foundation intends on enhancing the skills
              of young people and pushing the capabilities of the youth,
              to overcome the glass ceiling. This is achieved by providing a
              multitude of different opportunities and practical ways of developing
              the skills learned
            </span>
          </div>

          <div className="hm-section-container">
            <div className="hm-section-wrapper">
              <div className="flex-wrap">
                <div className="hm-section-divider">
                  <div className="section-text-wrapper">
                    <p className="section-desc">
                      Innovation Foundation is a hub intent on gathering various
                      industry opportunities into one place - making it
                      easier for students across the country to access.
                      These opportunities range from valuable work experience placements,
                      rewarding internship experiences and insightful mentorship programmes
                    </p>
                  </div>
                </div>
                <div className="hm-section-divider">
                  <div className="section-divider-imgContainer">
                    <img src="img/b/in-nodes.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hm-section-container">
            <div className="hm-section-wrapper">
              <div className="flex-wrap reverse">
                <div className="hm-section-divider">
                  <div className="section-text-wrapper">
                    <p className="section-desc">
                      Innovation Inc has given foundation members the chance to
                      spring their idea into existence. Active members are given
                      the opportunity to produce their ideas through the Inc
                      with its resources
                    </p>
                  </div>
                </div>
                <div className="hm-section-divider">
                  <div className="section-divider-imgContainer">
                    <img
                      style={{ height: "100%" }}
                      src="img/b/code-bubble.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ position: "relative", padding: 0, margin: 0 }}>
          <img src="img/s/blue.svg" />
          <img
            style={{
              position: "absolute",
              left: 0,
              bottom: "-5px",
              width: "100%",
            }}
            src="img/s/footer-curve.svg"
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "30px",
                color: "red",
                marginBottom: "10px",
                color: "#fff",
              }}
            >
              Want to get in on the action
            </span>
            <button
              className="btn fill-btn lght-shad"
              style={{ backgroundColor: "#fff", color: "#529cc7" }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(Register));
