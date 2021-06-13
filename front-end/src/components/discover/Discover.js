import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Footer from "../layout/Footer";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import { FilterModal } from "./ModalElements";

import "../../css/discover.css";
import { config } from "../../constants";
import { DiscoverNavbar } from "./DiscoverNavbar";
import OpportunityPage from "../opportunity-page/OpportunityPage";

import { SortBy } from "./SortBy";

const optionsSortBy = [
  { label: "Select Option", value: 0 },
  { label: "Most Recently Posted", value: 1 },
  { label: "Start Date", value: 2 },
  { label: "End Date", value: 3 },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opportunities: [],
      show: false,
      selectLocation: null,
      selectPostedDate: null,
      startDate: null,
      endDate: null,
      distance: null,
      minPay: null,
      sortByValue: null,
      fullRemote: false,
      exclusiveFilter: false,
    };

    this.handleModal = this.handleModal.bind(this);
    this.onChangeDatePosted = this.onChangeDatePosted.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeMinPay = this.onChangeMinPay.bind(this);
    this.onChangeSortBy = this.onChangeSortBy(this);
    this.onChangeFullRemote = this.onChangeFullRemote.bind(this);
    this.onChangeExclusiveFilter = this.onChangeExclusiveFilter.bind(this);
  }

  async getOpportunities(route, parameters) {
    var result = [];
    await axios
      .get(`${config.API_URL}/${route}`, {
        params: {
          body: parameters,
        },
      })
      .then((res) => {
        const opportunities = res.data;
        result = opportunities;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  }

  async componentDidMount() {
    this.setState({
      opportunities: (await this.getOpportunities("discover", [])).map((x) => {
        return { key: x.id, ...x };
      }),
    });
  }

  handleModal() {
    this.setState(({ opportunities, show }) => {
      return { opportunities: opportunities, show: !show };
    });
  }

  onChangeExclusiveFilter() {
    this.setState(({ exclusiveFilter }) => {
      return { exclusiveFilter: !exclusiveFilter };
    });
  }

  onChangeFullRemote() {
    this.setState(({ fullRemote }) => {
      return { fullRemote: !fullRemote };
    });
  }

  onChangeSortBy(event) {
    // If nothing is selected, then value is null. - BACK-END
    this.setState(() => {
      return {
        sortByValue: event.label == "Select Option" ? null : event.label,
      };
    });
  }

  onChangeLocation(event) {
    this.setState(() => {
      return {
        selectLocation: event.label == "Select Option" ? null : event.label,
      };
    });
  }

  onChangeDatePosted(event) {
    this.setState(() => {
      return {
        selectPostedDate: event.label == "Select Option" ? null : event.label,
      };
    });
  }

  onChangeStartDate(date) {
    this.setState(({ startDate, endDate }) => {
      const newStartDate = endDate
        ? date.getTime() > endDate.getTime()
          ? startDate
          : date
        : date;
      return { startDate: newStartDate };
    });
  }

  onChangeEndDate(date) {
    this.setState(({ startDate, endDate }) => {
      const newEndDate = startDate
        ? date.getTime() < startDate.getTime()
          ? endDate
          : date
        : date;
      return { endDate: newEndDate };
    });
  }

  onChangeDistance(_event, value) {
    this.setState(() => {
      return { distance: value === 0 ? null : value };
    });
  }

  onChangeMinPay(_event, value) {
    this.setState(() => {
      return { minPay: value === 0 ? null : value };
    });
  }

  async handleSubmit() {
    this.handleModal();
    const params = {
      selectLocation: this.state.selectLocation,
      selectPostedDate: this.state.selectPostedDate,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      minPay: this.state.minPay,
      fullRemote: this.state.fullRemote,
      exclusiveFilter: this.state.exclusiveFilter
    };

    this.setState({
      opportunities: await this.getOpportunities("custom", params),
    });
  }

  render() {
    return (
      <div>
        <FilterModal
          show={this.state.show}
          showModal={this.handleModal}
          handleSelectChange={this.onChangeFullRemote}
          onChangeDatePosted={this.onChangeDatePosted}
          onChangeLocation={this.onChangeLocation}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChangeStartDate={this.onChangeStartDate}
          onChangeEndDate={this.onChangeEndDate}
          handleSubmit={this.handleSubmit}
          onChangeMinPay={this.onChangeMinPay}
          onChangeDistance={this.onChangeDistance}
          fullRemote={this.state.fullRemote}
          selectLocation={this.state.selectLocation}
          selectPostedDate={this.state.selectPostedDate}
          distance={this.state.distance}
          minPay={this.state.minPay}
          exclusiveFilter={this.state.exclusiveFilter}
          onChangeExclusiveFilter={this.state.exclusiveFilter}
        />
        <div id="headerContainer">
          <div id="header-swirl-backdrop">
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

          <DiscoverNavbar />

          <div id="header-main-content">
            <div className="header-titleContainer">
              <span className="main-headerTitle">Discover</span>
              <span className="sub-headerTitle">
                Opportunities Right in Your Grasp
              </span>
            </div>

            <div id="header-contentContainer" className="main-filterSlider">
              <div className="main-filterSlider-wrapper">
                <div className="perspectiveContainer">
                  <div
                    data-filter="opportunities"
                    id="oppo-filter"
                    className="cardContainer shad main-filter active-type"
                  >
                    <div className="main-filter-lt" />
                    <div className="main-filter-header">
                      <span className="filter-title">Opportunities</span>
                      <span className="filter-area">
                        <span className="type-avail">3254</span> available
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
                        <span className="type-avail">2627</span> available
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
                        <span className="type-avail">627</span> Available
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
        </div>
        <div id="main-contentContainer" style={{ marginTop: "30px" }}>
          <div className="containerWrapper">
            <div id="main-filterContainer">
              <div className="filterBtn-container">
                <Button onClick={this.handleModal}>Filters</Button>
              </div>
              <SortBy
                optionsSortBy={optionsSortBy}
                onChangeSortBy={this.onChangeSortBy}
                sortByValue={this.state.sortByValue}
              />
              <div>
                {this.state.fullRemote ? (
                  <div className="filterContainer">
                    <span className="filterType">Remote{"\t"}</span>
                    <span className="filter-respo">{"\tyes"}</span>
                  </div>
                ) : (
                  this.state.selectLocation && (
                    <div className="filterContainer">
                      <span className="filterType">Location{"\t"}</span>
                      <span className="filter-respo">
                        {`\t${this.state.selectLocation}`}
                      </span>
                    </div>
                  )
                )}
                {this.state.startDate && (
                  <div className="filterContainer">
                    <span className="filterType">Starts After{"\t"}</span>
                    <span className="filter-respo">
                      {`\t${this.state.startDate.toLocaleDateString("en-GB")}`}
                    </span>
                  </div>
                )}
                {this.state.endDate && (
                  <div className="filterContainer">
                    <span className="filterType">Starts Before{"\t"}</span>
                    <span className="filter-respo">
                      {`\t${this.state.endDate.toLocaleDateString("en-GB")}`}
                    </span>
                  </div>
                )}
                {this.state.selectPostedDate && (
                  <div className="filterContainer">
                    <span className="filterType">Posted{"\t"}</span>
                    <span className="filter-respo">
                      {`\t${this.state.selectPostedDate}`}
                    </span>
                  </div>
                )}
                {this.state.distance && (
                  <div className="filterContainer">
                    <span className="filterType">Distance{"\t"}</span>
                    <span className="filter-respo">
                      {`\t${this.state.distance} miles`}
                    </span>
                  </div>
                )}
                {this.state.minPay && (
                  <div className="filterContainer">
                    <span className="filterType">Minimum Pay (p/w){"\t"}</span>
                    <span className="filter-respo">
                      {`\t£${this.state.minPay}`}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div
              data-filtered="opportunities"
              data-applied-filter-type="location, paid, time"
              data-applied-filter="london, free, day"
              id="contentContainer"
            >
              <div className="contentBox-wrapper">
                {this.state.opportunities.map((opp, index) => {
                  return (
                    // adt for ads
                    <OpportunityPage {...opp} />
                  );
                })}
              </div>
            </div>
            {/*
            <div
              style={{
                flex: 1,
                backgroundColor: "#338CD1",
                padding: "20px 0",
                textAlign: "center",
                borderRadius: 0,
              }}
            >
              <span style={{ display: "block", fontSize: 26, color: "#fff" }}>
                Our system automatically scans the web for the best
                opportunities each day for your convenience
              </span>
              <span style={{ display: "block", fontSize: 18, color: "#fff" }}>
                More listings will be available later today!
              </span>
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
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
