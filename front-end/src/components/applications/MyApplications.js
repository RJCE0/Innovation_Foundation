import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import {
  ApplicationsContainer,
  ApplicationsH1,
  ApplicationsCardsWrapper,
  ApplicationsCard,
  ApplicationsCardLogo,
  ApplicationsCardInfo,
  LinkR,
  LinkL,
  Button,
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
      removing: false,
    };
  }

  async getApplications() {
    var result = [];
    await axios
      .get(`${config.API_URL}/apply`, {
        params: {
          body: true,
        },
      })
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
    this.interval = setInterval(async () => {
      const appliedOpportunities = await this.getApplications();
      this.setState(() => {
        return {
          appliedOpps: appliedOpportunities,
        };
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getStatusColour = (status) => {
    switch (status) {
      case "Accepted":
        return "green";
      case "Rejected":
        return "red";
      default:
        return "#256de1";
    }
  };

  async deleteApplication(opp_id, user_id) {
    await axios
      .post(`${config.API_URL}/deleteApplication`, {
        params: {
          body: {
            user_id: user_id,
            opp_id: opp_id,
          },
        },
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeOpp = (opp_id, user_id) => {
    this.setState({ removing: true }, async () => {
      this.deleteApplication(opp_id, user_id);
      const appliedOpportunities = await this.getApplications();
      this.setState(() => {
        return {
          appliedOpps: appliedOpportunities,
          removing: false,
        };
      });
    });
  };

  render() {
    return (
      <>
        <DiscoverNavbar links={StudentSideNavOptions} student />
        {this.state.removing ? (
          <div style={{ padding: "20px 0 20px 0" }}>
            <Spinner />
            <h3 style={{ textAlign: "center" }}>Removing Application...</h3>
          </div>
        ) : (
          <ApplicationsContainer>
            <ApplicationsH1>My Applications</ApplicationsH1>
            {this.state.appliedOpps ? (
              <ApplicationsCardsWrapper>
                {this.state.appliedOpps.map((appliedOpp, index) => (
                  <ApplicationsCard key={index}>
                    <ApplicationsCardInfo>
                      <LinkR
                        to={{
                          pathname: `/discover/${appliedOpp.title
                            .trim()
                            .replace(/\s+/g, "-")
                            .toLowerCase()}&id=${appliedOpp.opp_id}`,
                        }}
                      >
                        <h3>{appliedOpp.title}</h3>
                      </LinkR>
                      <h5
                        style={{
                          color: this.getStatusColour(appliedOpp.status),
                        }}
                      >
                        {appliedOpp.status}
                      </h5>
                      <h5 style={{ wordBreak: "break-all" }}>
                        Your Comments: {appliedOpp.comments}
                      </h5>
                      {appliedOpp.file_url ? (
                        <Button
                          bg="#256de1"
                          onClick={() => window.open(appliedOpp.file_url)}
                        >
                          View CV
                        </Button>
                      ) : (
                        <h5>No CV Uploaded.</h5>
                      )}
                      {appliedOpp.status == "Rejected" ? (
                        <Button
                          bg="red"
                          onClick={() =>
                            this.removeOpp(
                              appliedOpp.opp_id,
                              appliedOpp.user_id
                            )
                          }
                        >
                          Remove
                        </Button>
                      ) : null}
                    </ApplicationsCardInfo>
                    <LinkL
                      to={{
                        pathname: `/discover/${appliedOpp.title
                          .trim()
                          .replace(/\s+/g, "-")
                          .toLowerCase()}&id=${appliedOpp.opp_id}`,
                      }}
                    >
                      <ApplicationsCardLogo src={appliedOpp.image_url} />
                    </LinkL>
                  </ApplicationsCard>
                ))}
              </ApplicationsCardsWrapper>
            ) : (
              <Spinner />
            )}
          </ApplicationsContainer>
        )}
        <Footer />
      </>
    );
  }
}
