import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { FilterModal } from "../discover/ModalElements";
import { config, optionsSortBy } from "../../constants";
import { SortBy } from "../discover/SortBy";
import OpportunityPage from "../opportunity-page/OpportunityPage";

export class CardsWithFilter extends Component {
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
    this.onChangeSortBy = this.onChangeSortBy.bind(this);
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
    this.setState(
      {
        opportunities: (
          await this.getOpportunities(
            this.props.favPage ? "favourites" : "discover",
            []
          )
        ).map((x) => {
          return { key: x.id, ...x };
        }),
      },
      () =>
        this.props.setNumberOfInternships
          ? this.props.setNumberOfInternships(this.state.opportunities.length)
          : null
    );
  }

  handleModal() {
    this.setState(({ opportunities, show }) => {
      return { opportunities: opportunities, show: !show };
    });
  }

  onChangeExclusiveFilter(event) {
    this.setState(() => {
      return { exclusiveFilter: event.target.checked };
    });
  }

  onChangeFullRemote(event) {
    this.setState(() => {
      return { fullRemote: event.target.checked };
    });
  }

  async onChangeSortBy(event) {
    this.setState(
      () => {
        return {
          sortByValue: event.label == "Sort By" ? null : event.label,
        };
      },
      async () => {
        const params = {
          selectLocation: this.state.selectLocation,
          selectPostedDate: this.state.selectPostedDate,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          minPay: this.state.minPay,
          sortByValue: this.state.sortByValue,
          fullRemote: this.state.fullRemote,
          exclusiveFilter: this.state.exclusiveFilter,
        };
        const opps = await this.getOpportunities(
          this.props.favPage ? "customFav" : "custom",
          params
        );
        this.setState(() => {
          return { opportunities: opps };
        });
      }
    );
  }

  onChangeLocation(event) {
    this.setState(() => {
      return {
        selectLocation: event.label == "Any" ? null : event.label,
      };
    });
  }

  onChangeDatePosted(event) {
    this.setState(() => {
      return {
        selectPostedDate: event.label == "Any" ? null : event.label,
      };
    });
  }

  onChangeStartDate(date) {
    this.setState(({ startDate, endDate }) => {
      const newStartDate =
        endDate && date
          ? date.getTime() > endDate.getTime()
            ? startDate
            : date
          : date;
      return { startDate: newStartDate };
    });
  }

  onChangeEndDate(date) {
    this.setState(({ startDate, endDate }) => {
      const newEndDate =
        startDate && date
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
      exclusiveFilter: this.state.exclusiveFilter,
    };

    this.setState({
      opportunities: await this.getOpportunities("custom", params),
    });
  }

  render() {
    return (
      <>
        {this.props.noFilter ? null : (
          <FilterModal
            show={this.state.show}
            showModal={this.handleModal}
            onChangeFullRemote={this.onChangeFullRemote}
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
            onChangeExclusiveFilter={this.onChangeExclusiveFilter}
          />
        )}
        <div id="main-contentContainer" style={{ marginTop: "30px" }}>
          <div className="containerWrapper">
            <div id="main-filterContainer">
              {this.props.noFilter ? null : (
                <div className="filterBtn-container">
                  <Button onClick={this.handleModal}>Filters</Button>
                </div>
              )}
              <SortBy
                optionsSortBy={optionsSortBy}
                onChangeSortBy={this.onChangeSortBy}
                sortByValue={this.state.sortByValue}
              />
              {this.props.noFilter ? null : (
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
                  {this.state.exclusiveFilter && (
                    <div className="filterContainer">
                      <span className="filterType">Exclusive{"\t"}</span>
                      <span className="filter-respo">{"\tyes"}</span>
                    </div>
                  )}
                  {this.state.startDate && (
                    <div className="filterContainer">
                      <span className="filterType">Starts After{"\t"}</span>
                      <span className="filter-respo">
                        {`\t${this.state.startDate.toLocaleDateString(
                          "en-GB"
                        )}`}
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
                      <span className="filterType">
                        Minimum Pay (p/w){"\t"}
                      </span>
                      <span className="filter-respo">
                        {`\t£${this.state.minPay}`}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div
              data-filtered="opportunities"
              data-applied-filter-type="location, paid, time"
              data-applied-filter="london, free, day"
              id="contentContainer"
            >
              <div className="contentBox-wrapper">
                {this.state.opportunities.map((opp) => {
                  return <OpportunityPage {...opp} key={opp.id} />;
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
      </>
    );
  }
}
