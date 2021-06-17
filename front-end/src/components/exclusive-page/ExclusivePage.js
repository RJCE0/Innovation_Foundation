import React from "react";
import axios from "axios";
import { config } from "../../constants";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import {
  ExclusivePageContainer,
  ExclusiveHeader,
  ExclusiveImage,
  ExclusiveTitle,
  ApplyButtons,
  ApplyButtonComponent,
  ExclusiveBody,
  ExclusiveBodyItem,
  ExclusiveBreadCrumbs,
  ExclusiveSummary,
  ExclusiveSummaryItem,
  ExclusiveSummaryTitle,
} from "./ExclusiveElements";
import { withRouter } from "react-router";
import Spinner from "../common/Spinner";
import Location from "../common/location.gif";
import Pound from "../common/pound.gif";
import Calendar from "../common/calendar.gif";
import Views from "../common/views.gif";

class ExclusivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opps: null,
      info: null,
    };
    this.oppId = this.props.match.params.handle.split("=")[1];
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
    const params = {
      oppId: this.oppId,
    };
    this.setState(
      {
        opps: await this.getOpportunities("exclusive", params),
        info: await this.getOpportunities("exclusive-info", params),
      },
      this.updateViews.bind(this)
    );
  }

  async updateViews() {
    await axios
      .post(`${config.API_URL}/views`, {
        params: {
          body: {
            ...this.state.opps["0"],
            views: parseInt(this.state.opps["0"].views) + 1,
          },
        },
      })
      .catch((error) => {
        console.log(error);
      });
  }

  formatInfoList(info) {
    return info.split("\n").map((bullet) => {
      return (
        <li
          style={{ padding: "5px 0 5px 0", listStyleType: "disclosure-closed" }}
        >
          {bullet}
        </li>
      );
    });
  }

  formatInfo(info) {
    return info.split("\n").map((para) => {
      return <p>{para}</p>;
    });
  }

  render() {
    const opps = this.state.opps ? this.state.opps["0"] : null;
    const info = this.state.info ? this.state.info["0"] : null;

    return (
      <>
        <DiscoverNavbar />
        <ExclusivePageContainer>
          {opps ? (
            <>
              <ExclusiveHeader>
                <ExclusiveImage src={opps.image_url} />
                <ExclusiveTitle>{opps.title}</ExclusiveTitle>
              </ExclusiveHeader>
              <ExclusiveBreadCrumbs>
                <ExclusiveSummary>
                  <ExclusiveSummaryTitle>Summary</ExclusiveSummaryTitle>
                  <ExclusiveSummaryItem>
                    <img width="20px" src={Location} alt="Location:" />
                    {opps.location}
                  </ExclusiveSummaryItem>
                  <ExclusiveSummaryItem>
                    <img width="20px" src={Pound} alt="Location:" />
                    {`${opps.pay} p/w`}
                  </ExclusiveSummaryItem>
                  <ExclusiveSummaryItem>
                    <img width="20px" src={Calendar} alt="Location:" />
                    {new Date(opps.date).toDateString("en-GB")}
                  </ExclusiveSummaryItem>
                  <ExclusiveSummaryItem>
                    <img width="20px" src={Views} alt="Location:" />
                    {parseInt(opps.views) + 1}
                  </ExclusiveSummaryItem>
                </ExclusiveSummary>
                <ApplyButtons>
                  <ApplyButtonComponent backgroundColor="#256de1">
                    Apply
                  </ApplyButtonComponent>
                  <ApplyButtonComponent backgroundColor="#f8c51c">
                    Favourite
                  </ApplyButtonComponent>
                </ApplyButtons>
              </ExclusiveBreadCrumbs>
              <ExclusiveBody>
                {info ? (
                  <>
                    <ExclusiveBodyItem>
                      <h3 style={{ color: "#256de1" }}>
                        What Your Role Involves
                      </h3>
                      <h5>{this.formatInfo(info.role)}</h5>
                    </ExclusiveBodyItem>
                    <ExclusiveBodyItem>
                      <h3 style={{ color: "#256de1" }}>Company Description</h3>
                      <h5>{this.formatInfo(info.c_description)}</h5>
                    </ExclusiveBodyItem>
                    <ExclusiveBodyItem>
                      <h3 style={{ color: "#256de1" }}>
                        Salary, Benefits And Skills Gained
                      </h3>
                      <h5>
                        <ul>{this.formatInfoList(info.skills_gained)}</ul>
                      </h5>
                    </ExclusiveBodyItem>
                    <ExclusiveBodyItem>
                      <h3 style={{ color: "#256de1" }}>Requirements</h3>
                      <h5>
                        <ul>{this.formatInfoList(info.requirements)}</ul>
                      </h5>
                    </ExclusiveBodyItem>{" "}
                  </>
                ) : (
                  <Spinner />
                )}
              </ExclusiveBody>
            </>
          ) : (
            <Spinner />
          )}
        </ExclusivePageContainer>
        <Footer />
      </>
    );
  }
}

export default withRouter(ExclusivePage);
