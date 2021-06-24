import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Footer from "../layout/Footer";
import "react-bootstrap";

import "../../css/discover.css";
import { DiscoverNavbar } from "./DiscoverNavbar";
import { CardsWithFilter } from "../common/CardsWithFilter";
import { StudentSideNavOptions } from "../../constants.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfInternships: null,
    };
    this.setNumberOfInternships = this.setNumberOfInternships.bind(this);
  }

  setNumberOfInternships(numOfInternships) {
    this.setState(() => {
      return { numberOfInternships: numOfInternships };
    });
  }

  render() {
    return (
      <>
        <DiscoverNavbar links={StudentSideNavOptions} student />
        <div className="top">
          <div className="swirly-background">
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

          <div className="content">
            <div>
              <span
                className="main-headerTitle"
                style={{ textAlign: "center" }}
              >
                Discover
              </span>
              <span className="sub-headerTitle" style={{ textAlign: "center" }}>
                Opportunities Right in Your Grasp
              </span>
            </div>

            <div className="static-cards">
              <div
                data-filter="opportunities"
                id="oppo-filter"
                className="cardContainer shad main-filter active-type"
              >
                <div className="main-filter-lt" />
                <div className="main-filter-header">
                  <span className="filter-title">Opportunities</span>
                  <span className="filter-area">
                    <span className="type-avail">
                      {" "}
                      {this.state.numberOfInternships}
                    </span>{" "}
                    available
                  </span>
                </div>
                <img
                  style={{
                    maxHeight: "250px",
                    display: "block",
                    width: "80%",
                    textAlign: "center",
                    margin: "auto",
                    opacity: 0.9,
                  }}
                  src="./img/opportunities.svg"
                />
              </div>

              <div className="perspectiveContainer">
                <div
                  data-filter="events"
                  id="event-filter"
                  className="cardContainer shad main-filter"
                >
                  <div className="main-filter-lt" />
                  <div className="main-filter-header">
                    <span className="filter-title">Internships</span>
                    <span className="filter-area">
                      <span className="type-avail">
                        {this.state.numberOfInternships}
                      </span>{" "}
                      available
                    </span>
                  </div>
                  <img
                    style={{
                      display: "block",
                      width: "80%",
                      textAlign: "center",
                      margin: "auto",
                      opacity: 0.9,
                    }}
                    src="./img/calender.svg"
                  />
                </div>
              </div>

              <div className="perspectiveContainer">
                <div
                  data-filter="scholarship"
                  id="scholar-filter"
                  className="cardContainer shad main-filter"
                >
                  <div className="main-filter-lt" />
                  <div className="main-filter-header">
                    <span className="filter-title">Mentorships</span>
                    <span className="filter-area">
                      <span className="type-avail">Coming Soon</span>
                    </span>
                  </div>
                  <img
                    style={{
                      display: "block",
                      width: "80%",
                      textAlign: "center",
                      margin: "auto",
                      opacity: 0.9,
                    }}
                    src="./img/graduation.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardsWithFilter setNumberOfInternships={this.setNumberOfInternships} />
        <Footer />
      </>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Dashboard);
