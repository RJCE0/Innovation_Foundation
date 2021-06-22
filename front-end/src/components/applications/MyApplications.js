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
} from "./ApplicationElements";
import axios from "axios";
import { config } from "../../constants.js";
import Spinner from "../common/Spinner";
import { StudentSideNavOptions } from "../../constants.js";

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
    this.setState(() => {
      return {
        appliedOpps: appliedOpportunities,
      };
    });
  }

  render() {
    return (
      <>
        <DiscoverNavbar links={StudentSideNavOptions} student />
        <ApplicationsContainer>
          <ApplicationsH1>My Applications</ApplicationsH1>
          {this.state.appliedOpps ? (
            <ApplicationsCardsWrapper>
              {this.state.appliedOpps.map((appliedOpp, index) => (
                <ApplicationsCard
                  to={{
                    pathname: `/discover/${appliedOpp.title
                      .trim()
                      .replace(/\s+/g, "-")
                      .toLowerCase()}&id=${appliedOpp.opp_id}`,
                  }}
                  key={index}
                >
                  <ApplicationsCardInfo>
                    <h3>{appliedOpp.title}</h3>
                    <h5 style={{ color: "#256de1" }}>{appliedOpp.status}</h5>
                    <h5>
                      CV uploaded: {appliedOpp.cv_uploaded ? "Yes" : "No"}
                    </h5>
                    <h5>Your Comments: {appliedOpp.comments}</h5>
                  </ApplicationsCardInfo>
                  <ApplicationsCardLogoContainer>
                    <ApplicationsCardLogo src={appliedOpp.image_url} />
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
