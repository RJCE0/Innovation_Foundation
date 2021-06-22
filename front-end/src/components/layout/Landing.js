import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particles from "react-particles-js";

import "../../css/index.css";
import OpportunityPage from "../opportunity-page/OpportunityPage";

const cls1 = {
  fill: "f9f9f9",
};

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/discover");
    }
  }

  render() {
    return (
      <div>
        <div>
          <div id="headerContainer">
            <div id="header-swirl-backdrop" style={{ overflow: "hidden" }}>
              <div
                className="videoWrapper"
                style={{
                  height: "1000px",
                }}
              >
                <Particles
                  style={{
                    width: "100%",
                    background: `#000000`,
                  }}
                  params={{
                    particles: {
                      number: {
                        value: 110,
                      },
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse",
                        },
                      },
                    },
                  }}
                />
              </div>
              <svg
                id="Layer_2"
                data-name="Layer 2"
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
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: "-10px",
                  width: "100%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1920 211.03"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <path
                      className={cls1}
                      style={cls1}
                      d="M1830.18,571.81c-90.62,33.22-207.57,65.72-291.39,39.12l-271.14-86c-101.45-32.17-218.24-27.07-313.45,13.69l-331,141.73C570.12,703.1,510.47,714.68,450.63,715H1920V570.08C1891.66,561,1857.85,561.67,1830.18,571.81Z"
                      transform="translate(-0.02 -503.97)"
                    />
                    <path
                      className={cls1}
                      style={cls1}
                      d="M289.6,687.07,0,577.7V715h445.4C392,714.7,338.52,705.42,289.6,687.07Z"
                      transform="translate(-0.02 -503.97)"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Navbar />
            <div id="header-main-content">
              <div className="header-titleContainer">
                <div className="headerWrapper">
                  <span className="main-headerTitle">Designed For Future</span>
                  <div id="slot-machine-container">
                    <div className="slot-machine-wrapper">
                      <span className="cara-text cara-active">Thinkers</span>
                      <span className="cara-text">Software Developers</span>
                      <span className="cara-text">Leaders</span>
                      <span className="cara-text">Entrepreneurs</span>
                      <span className="cara-text">Mathematicians</span>
                      <span className="cara-text">Innovators</span>
                      <span className="cara-text">Engineers</span>
                    </div>
                  </div>
                </div>
                <span className="sub-headerTitle">
                  Join the new wave of youth focused on reinventing and
                  redesigning the world
                </span>

                <a className="btn fill-btn" href="./discover">
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          <div id="main-contentContainer">
            <div className="hm-section-container">
              <div className="hm-section-wrapper">
                <div className="flex-wrap">
                  <div className="hm-section-divider">
                    <div className="section-text-wrapper">
                      <span className="section-header">
                        Not your average work experience site
                      </span>
                      <p className="section-desc">
                        Innovation Foundation is creating a centralised hub for
                        everything a student needs. Work experience,
                        Internships, Mentorships and more
                      </p>
                    </div>
                  </div>
                  <div className="hm-section-divider">
                    <div className="section-divider-imgContainer">
                      <img src="img/b/skeleton.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hm-section-container"
              style={{ position: "relative", marginBottom: 0 }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  left: 0,
                  width: "100%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1920.08 535"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <path
                      className="cls-2"
                      style={{ fill: "#e6e5e5" }}
                      d="M1920.08,180,834.45,441a991.8,991.8,0,0,1-328.73,22.72L0,414V715H1920.08Z"
                      transform="translate(0 -180)"
                    />
                  </g>
                </svg>
              </div>
              <div className="hm-section-wrapper">
                <div className="flex-wrap reverse">
                  <div className="hm-section-divider">
                    <div className="section-text-wrapper">
                      <span className="section-header">
                        Find experiences near you
                      </span>
                      <p className="section-desc">
                        Innovation Foundation has removed all the hassle of
                        searching and gathering opportunities around you, making
                        it quicker and easier to find the perfect opportunity
                      </p>
                    </div>
                  </div>
                  <div className="hm-section-divider">
                    <div className="section-divider-imgContainer">
                      <img src="img/b/pins.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hm-section-container"
              style={{
                backgroundColor: "#e6e5e5",
                padding: "40px 0 20px 0",
                marginBottom: 0,
              }}
            >
              <div
                className="hm-section-wrapper"
                style={{
                  textAlign: "center",
                  width: "60%",
                  margin: "0 auto",
                  marginBottom: "30px",
                  marginTop: "30px",
                  fontSize: "30px",
                  color: "#338cd1",
                }}
              >
                <span>
                  We're constantly searching for{" "}
                  <span style={{ color: "#53c353", fontWeight: "bold" }}>
                    valuable
                  </span>{" "}
                  placements and approaching potential employers for{" "}
                  <span style={{ color: "#e66363", fontWeight: "bold" }}>
                    exclusive
                  </span>{" "}
                  opportunities that will{" "}
                  <span style={{ color: "#5d5db1", fontWeight: "bold" }}>
                    enhance
                  </span>{" "}
                  a students professional and academic career
                </span>
              </div>
            </div>

            <div
              className="hm-section-container"
              style={{ margin: 0, marginTop: "-40px", padding: 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 356.17">
                <g id="Layer_2" data-name="Layer 2">
                  <path
                    className="cls-2"
                    style={{ fill: "#e6e5e5" }}
                    d="M0,130,504.22,264.69a386.13,386.13,0,0,0,161.3,8.12L985.87,221a374.53,374.53,0,0,1,158.44,8.39l427,116.45a293.9,293.9,0,0,0,175.37-6.48L1920,278V0H0Z"
                  />
                </g>
              </svg>
              <div className="containerWrapper">
                <div className="hm-section-header">
                  <span className="hm-section-header-title">
                    Popular Opportunites
                  </span>
                  <span className="hm-section-header-sub">
                    Get a sneak preview
                  </span>
                </div>
                <div id="contentContainer">
                  <div className="privacy-overlay">
                    <a className="btn fill-btn" href="./discover">
                      Join To View
                    </a>
                  </div>

                  <div className="contentBox-wrapper">
                    <div className="content-item" data-id="5jrdada7jr">
                      <a href="#">
                        <div className="cardContainer contentBox lght-shad">
                          <div className="content-type-placeholder-img">
                            <img
                              className="content-type-img"
                              src="https://storage.googleapis.com/whitehat-public/companies/219/logo/rectangle.png?v=1544520337"
                            />

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 280 160"
                            >
                              <g id="Layer_2" data-name="Layer 2">
                                <path
                                  id="Layer_3"
                                  fill="#f3f3f3"
                                  d="M0 0h280v160H0z"
                                  data-name="Layer 3"
                                />
                                <g id="Layer_4" data-name="Layer 4">
                                  <path
                                    fill="#999"
                                    d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                    opacity=".12"
                                  />
                                  <path
                                    d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                    style={{ fill: "#7a7a7a", opacity: ".05" }}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="content-type-overlay">
                            <div className="content-bottom-gradient" />
                            <div className="content-top-leftContainer">
                              <button
                                id="content-heart"
                                className="content-btn"
                              >
                                <img src="./img/empty-heart.svg" />
                              </button>
                              <button
                                id="content-share"
                                className="content-btn"
                              >
                                <img src="./img/share.svg" />
                              </button>
                            </div>

                            <span className="content-special excl">
                              Exclusive
                            </span>
                            <span className="content-view">
                              <img
                                className="content-vertified"
                                src="./img/vertified.svg"
                              />
                              <span>24 Views</span>
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="content-info">
                        <a href="#" className="title">
                          Software Engineering & Data Processing Apprentice
                        </a>
                        <span className="additional-info">12th March 2022</span>
                      </div>
                    </div>

                    <div className="content-item" data-id="hr34hdj5e3">
                      <a href="#">
                        <div className="cardContainer contentBox lght-shad">
                          <div className="content-type-placeholder-img">
                            <img
                              className="content-type-img"
                              src="data:image/jpeg;base64,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"
                            />

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 280 160"
                            >
                              <g id="Layer_2" data-name="Layer 2">
                                <path
                                  id="Layer_3"
                                  fill="#f3f3f3"
                                  d="M0 0h280v160H0z"
                                  data-name="Layer 3"
                                />
                                <g id="Layer_4" data-name="Layer 4">
                                  <path
                                    fill="#999"
                                    d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                    opacity=".12"
                                  />
                                  <path
                                    d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                    style={{ fill: "#7a7a7a", opacity: ".05" }}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="content-type-overlay">
                            <div className="content-bottom-gradient" />
                            <div className="content-top-leftContainer">
                              <button
                                id="content-heart"
                                className="content-btn"
                              >
                                <img src="./img/empty-heart.svg" />
                              </button>
                              <button
                                id="content-share"
                                className="content-btn"
                              >
                                <img src="./img/share.svg" />
                              </button>
                            </div>

                            <span className="content-view">6 Views</span>
                          </div>
                        </div>
                      </a>
                      <div className="content-info">
                        <a href="#" className="title">
                          Work Experience at the BBC
                        </a>
                        <span className="additional-info">7th August 2021</span>
                      </div>
                    </div>

                    <div className="content-item" data-id="jg439djdfkg">
                      <a href="#">
                        <div className="cardContainer contentBox lght-shad">
                          <div className="content-type-placeholder-img">
                            <img
                              className="content-type-img"
                              src="https://storage.googleapis.com/whitehat-public/companies/222/logo/rectangle.png?v=1544720835"
                            />

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 280 160"
                            >
                              <g id="Layer_2" data-name="Layer 2">
                                <path
                                  id="Layer_3"
                                  fill="#f3f3f3"
                                  d="M0 0h280v160H0z"
                                  data-name="Layer 3"
                                />
                                <g id="Layer_4" data-name="Layer 4">
                                  <path
                                    fill="#999"
                                    d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                    opacity=".12"
                                  />
                                  <path
                                    d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                    style={{ fill: "#7a7a7a", opacity: ".05" }}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="content-type-overlay">
                            <div className="content-bottom-gradient" />
                            <div className="content-top-leftContainer">
                              <button
                                id="content-heart"
                                className="content-btn"
                              >
                                <img src="./img/empty-heart.svg" />
                              </button>
                              <button
                                id="content-share"
                                className="content-btn"
                              >
                                <img src="./img/share.svg" />
                              </button>
                            </div>

                            <span className="content-view">35 Views</span>
                          </div>
                        </div>
                      </a>
                      <div className="content-info">
                        <a href="#" className="title">
                          Energy Specialist Apprentice
                        </a>
                        <span className="additional-info">13th July 2021</span>
                      </div>
                    </div>

                    <div className="content-item" data-id="hti34f632Df">
                      <a href="#">
                        <div className="cardContainer contentBox lght-shad">
                          <div className="content-type-placeholder-img">
                            <img
                              className="content-type-img"
                              src="https://www.bitcni.org.uk/wp-content/uploads/2018/07/Sky-logo.jpg"
                            />

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 280 160"
                            >
                              <g id="Layer_2" data-name="Layer 2">
                                <path
                                  id="Layer_3"
                                  fill="#f3f3f3"
                                  d="M0 0h280v160H0z"
                                  data-name="Layer 3"
                                />
                                <g id="Layer_4" data-name="Layer 4">
                                  <path
                                    fill="#999"
                                    d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                    opacity=".12"
                                  />
                                  <path
                                    d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                    style={{ fill: "#7a7a7a", opacity: ".05" }}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="content-type-overlay">
                            <div className="content-bottom-gradient" />
                            <div className="content-top-leftContainer">
                              <button
                                id="content-heart"
                                className="content-btn"
                              >
                                <img src="./img/empty-heart.svg" />
                              </button>
                              <button
                                id="content-share"
                                className="content-btn"
                              >
                                <img src="./img/share.svg" />
                              </button>
                            </div>

                            <span className="content-view">
                              <img
                                className="content-vertified"
                                src="./img/vertified.svg"
                              />
                              <span>96 Views</span>
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="content-info">
                        <a href="#" className="title">
                          Software Engineering
                        </a>
                        <span className="additional-info">7th April 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hm-section-container" style={{ marginTop: "80px" }}>
              <div className="containerWrapper">
                <div className="contentHeader">
                  <span className="header">Innovation Foundation Blog</span>
                  <p className="sub-header">
                    Uncover stories from our community
                  </p>
                </div>
                <div className="blog-container">
                  <a href="#">
                    <div className="cardContainer blog-item lght-shad">
                      <div className="blog-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 280 160"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <path
                              id="Layer_3"
                              fill="#f3f3f3"
                              d="M0 0h280v160H0z"
                              data-name="Layer 3"
                            />
                            <g id="Layer_4" data-name="Layer 4">
                              <path
                                fill="#999"
                                d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                opacity=".12"
                              />
                              <path
                                d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                style={{ fill: "#7a7a7a", opacity: ".05" }}
                              />
                            </g>
                          </g>
                        </svg>
                        <img
                          width="100%"
                          height="100%"
                          src="./img/showcase.jpg"
                        />
                      </div>
                      <div className="blog-details">
                        <span>
                          Innovation Foundation crowned Best Opportunities
                          Aggregator 2021
                        </span>
                      </div>
                    </div>
                  </a>

                  <a href="#">
                    <div className="cardContainer blog-item lght-shad">
                      <div className="blog-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 280 160"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <path
                              id="Layer_3"
                              fill="#f3f3f3"
                              d="M0 0h280v160H0z"
                              data-name="Layer 3"
                            />
                            <g id="Layer_4" data-name="Layer 4">
                              <path
                                fill="#999"
                                d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                opacity=".12"
                              />
                              <path
                                d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                style={{ fill: "#7a7a7a", opacity: ".05" }}
                              />
                            </g>
                          </g>
                        </svg>
                        <img
                          width="100%"
                          height="100%"
                          src="./img/showcase.jpg"
                        />
                      </div>
                      <div className="blog-details">
                        <span>
                          Student Kicks Off Career in Software Development
                        </span>
                      </div>
                    </div>
                  </a>

                  <a href="#">
                    <div className="cardContainer blog-item lght-shad">
                      <div className="blog-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 280 160"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <path
                              id="Layer_3"
                              fill="#f3f3f3"
                              d="M0 0h280v160H0z"
                              data-name="Layer 3"
                            />
                            <g id="Layer_4" data-name="Layer 4">
                              <path
                                fill="#999"
                                d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                opacity=".12"
                              />
                              <path
                                d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                style={{ fill: "#7a7a7a", opacity: ".05" }}
                              />
                            </g>
                          </g>
                        </svg>
                        <img
                          width="100%"
                          height="100%"
                          src="./img/showcase.jpg"
                        />
                      </div>
                      <div className="blog-details">
                        <span>
                          Innovation Foundation members rank 1st in Most
                          Talented Youth 2021
                        </span>
                      </div>
                    </div>
                  </a>

                  <a href="#">
                    <div className="cardContainer blog-item lght-shad">
                      <div className="blog-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 280 160"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <path
                              id="Layer_3"
                              fill="#f3f3f3"
                              d="M0 0h280v160H0z"
                              data-name="Layer 3"
                            />
                            <g id="Layer_4" data-name="Layer 4">
                              <path
                                fill="#999"
                                d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                                opacity=".12"
                              />
                              <path
                                d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                                style={{ fill: "#7a7a7a", opacity: ".05" }}
                              />
                            </g>
                          </g>
                        </svg>
                        <img
                          width="100%"
                          height="100%"
                          src="./img/showcase.jpg"
                        />
                      </div>
                      <div className="blog-details">
                        <span>Innovation Female Developer Awards</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
