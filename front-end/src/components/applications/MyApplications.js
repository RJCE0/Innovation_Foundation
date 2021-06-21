import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import {
  ApplicationsContainer,
  ApplicationsH1,
  ApplicationsCardsWrapper,
  ApplicationsCard,
  ApplicationsCardLogo,
  ApplicationsCardLogoContainer,
  ApplicationsCardInfo,
  CardLink,
} from "./ApplicationElements";
import axios from "axios";
import { config } from "../../constants.js";
import Spinner from "../common/Spinner";
import logo from "../../img/innovation-logo.png";

export class MyApplications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedOpps: null,
      // Are the next ones needed?
      // opp_id: null,
      // comments: null,
      // cv_uploaded: null,
      // status: null,
    };
  }

  async getApplications() {
    var result = [];
    await axios
      .get(`${config.API_URL}/apply`)
      .then((res) => {
        const applications = res.data;
        result = applications;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  }

  async componentDidMount() {
    const appliedOpportunities = await this.getApplications();
    this.setState(
      () => {
        return {
          appliedOpps: appliedOpportunities,
        };
      },
      () => console.log(this.state.appliedOpps)
    );
  }

  render() {
    return (
      <>
        <DiscoverNavbar />
        <ApplicationsContainer>
          <ApplicationsH1>My Applications</ApplicationsH1>
          {this.state.appliedOpps ? (
            <ApplicationsCardsWrapper>
              {this.state.appliedOpps.map((appliedOpp) => (
                <ApplicationsCard
                  to={{
                    pathname: `/discover/${appliedOpp.opp_title
                      .trim()
                      .replace(/\s+/g, "-")
                      .toLowerCase()}&id=${appliedOpp.opp_id}`,
                  }}
                >
                  <ApplicationsCardInfo>
                    <h3>{appliedOpp.opp_title}</h3>
                    <h5 style={{ color: "#256de1" }}>{appliedOpp.status}</h5>
                    <h5>
                      CV uploaded: {appliedOpp.cv_uploaded ? "Yes" : "No"}
                    </h5>
                    <h5>Additional Comments: {appliedOpp.comments}</h5>
                  </ApplicationsCardInfo>
                  <ApplicationsCardLogoContainer>
                    <ApplicationsCardLogo src={logo} />
                  </ApplicationsCardLogoContainer>
                </ApplicationsCard>
              ))}
            </ApplicationsCardsWrapper>
          ) : (
            <Spinner />
          )}
        </ApplicationsContainer>
        {/*
        Opportunity Title
        Comments
        CV was uploaded or not boolean
        Status
       */}
        <Footer />
      </>
    );
  }
}
