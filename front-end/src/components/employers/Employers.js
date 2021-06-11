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
            <div class="header-titleContainer">
              <div class="headerWrapper">
                <span class="main-headerTitle" style={{ fontSize: "70px" }}>
                  Investing in the future
                </span>
              </div>
              <span
                class="sub-headerTitle"
                style={{ display: "block", fontSize: "30px" }}
              >
                Identifying the best youth talent the UK has to offer
              </span>

              <div style={{ display: "inline-block", flexDirection: "column" }}>
                <a
                  class="btn fill-btn"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    pointerEvents: "none",
                  }}
                  href="#"
                >
                  Employers Portal
                  <span
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontSize: 12,
                      color: "#fff",
                    }}
                  >
                    Coming Soon
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="main-contentContainer">
          <div id="main-containerTitle">
            <span class="ts">But why choose</span>
            <span class="b ts">Innovation Foundation</span>
          </div>

          <div class="hm-section-container">
            <div class="hm-section-wrapper">
              <div class="flex-wrap">
                <div class="hm-section-divider">
                  <div class="section-text-wrapper">
                    <span class="section-header">Who's Here</span>
                    <p class="section-desc">
                      Innovation Foundation is filled with highly-skilled,
                      ambitious students focused on furthering their respective
                      careers
                    </p>
                  </div>
                </div>
                <div class="hm-section-divider">
                  <div class="section-divider-imgContainer">
                    <img src="img/b/certificate.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hm-section-container">
            <div class="hm-section-wrapper">
              <div class="flex-wrap reverse">
                <div class="hm-section-divider">
                  <div class="section-text-wrapper">
                    <span class="section-header">Our Reach</span>
                    <p class="section-desc">
                      With our presence spanning across many schools in London,
                      you'll find an abundance of talented students with a
                      passion for your industry
                    </p>
                  </div>
                </div>
                <div class="hm-section-divider">
                  <div class="section-divider-imgContainer">
                    <img style={{ height: "100%" }} src="img/b/museum.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hm-section-container">
            <div class="hm-section-wrapper">
              <div class="flex-wrap">
                <div class="hm-section-divider">
                  <div class="section-text-wrapper">
                    <span class="section-header">Understand Your Audience</span>
                    <p class="section-desc">
                      You'll have access to detailed analytics on what
                      interactions occur on your opportunities i.e. views,
                      favourites, applications and more
                    </p>
                  </div>
                </div>
                <div class="hm-section-divider">
                  <div class="section-divider-imgContainer">
                    <img src="img/b/in-stats.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="" style={{ position: "relative", padding: 0, margin: 0 }}>
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
                marginBottom: "10px",
                color: "#fff",
              }}
            >
              Check out all the tools available to you
            </span>
            <div style={{ display: "inline-block", flexDirection: "column" }}>
              <button
                class="btn fill-btn lght-shad"
                style={{
                  backgroundColor: "#fff",
                  color: "#529cc7",
                  pointerEvents: "none",
                }}
              >
                Employers Portal
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 12,
                    color: "#529cc7",
                  }}
                >
                  Coming Soon
                </span>
              </button>
            </div>
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
