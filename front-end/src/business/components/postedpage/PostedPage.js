import React, { Component } from "react";
import { DiscoverNavbar } from "../../../components/discover/DiscoverNavbar";
import Footer from "../../../components/layout/Footer";
import { BusinessSideNavOptions } from "../../../constants";
import styled from "styled-components";
import Spinner from "../../../components/common/Spinner";
import {
  ArrowRight,
  ArrowLeft,
} from "../../../components/internships/Internships";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../../../components/internships/i.css";
import axios from "axios";
import { config } from "../../../constants";
import AvatarIcon from "../../../img/user.png";

export const ApplicationsCard = styled.button`
  width: 90%;
  border: 1px solid black;
  background-color: transparent;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.act ? "0 0 15px rgba(22, 126, 224, 0.7)" : "none"};
  transform: ${(props) => (props.act ? "scale(1.1)" : "scale(1)")};
  transition: all 0.3s ease-in-out;
`;

const BreakdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-family: "Nunito";
  background-color: white;
`;

const PostedOppsWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: scroll;
  align-items: center;
  border: none;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 30px 20px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AppliedInformationWrapper = styled.div`
  flex: 1;
  height: 100%;
  align-items: center;
  border: none;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 30px 20px;
`;

const IconNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 100px;
`;

const StudentInfoWrapper = styled.div`
  border-top: 1px solid black;
  width: 100%;
  padding: 40px 0 40px 0;
  overflow: hidden;
  text-align: center;
  overflow: scroll;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  background-color: ${(props) => {
    return props.clr;
  }};
`;

const colours = [
  "#4e93f2",
  "#47d3e2",
  "#d03632",
  "#a966dd",
  "#8c655d",
  "#e1953c",
  "#33e17a",
];

const MenuItem = ({ user }) => {
  return (
    <div className={`menu-item`}>
      <IconNameWrapper>
        <Avatar src={AvatarIcon} clr={colours[user.user_id]} />
        <h3 style={{ textAlign: "center" }}>
          {user.name.length > 6 ? `${user.name.substring(0, 6)}..` : user.name}
        </h3>
      </IconNameWrapper>
    </div>
  );
};

const StatusButton = styled.button`
  padding: 10px 10px 10px 10px;
  color: white;
  background-color: ${(props) => props.bg};
  border: 1px solid ${(props) => props.bg};
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    background-color: white;
    color: ${(props) => props.bg};
  }
`;

class PostedOpps extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Your Posted Opportunities</h1>
        {this.props.opps.map((obj, index) => {
          return (
            <ApplicationsCard
              key={index}
              act={this.props.selectedOppId == obj.opp_id}
              onClick={() => this.props.onChangeSelectedOppId(obj.opp_id)}
            >
              <h3>{obj.title}</h3>
              <h6 style={{ color: "#256de1" }}>
                Starting Date: {new Date(obj.date).toLocaleDateString("en-GB")}
              </h6>
              <h6>{obj.description}</h6>
            </ApplicationsCard>
          );
        })}
      </>
    );
  }
}
class PostedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedOpps: null,
      selectedOppId: null,
      menuItems: [],
      studentsArray: null,
      selectedStudentIdx: null,
      statusSelected: null,
    };
    this.menu = [];
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

  async getUserApplication(opp_id) {
    var result = [];
    await axios
      .get(`${config.API_URL}/userApplications`, {
        params: {
          body: opp_id,
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

  async updateApplicationStatus() {
    await axios
      .post(`${config.API_URL}/status`, {
        params: {
          body: {
            newStatus: this.state.statusSelected,
            user_id:
              this.state.studentsArray[this.state.selectedStudentIdx].user_id,
            opp_id: this.state.selectedOppId,
          },
        },
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async componentDidMount() {
    const apps = await this.getApplications();
    this.setState(
      () => {
        return {
          postedOpps: apps,
          selectedOppId: apps.length ? apps[0].opp_id : 0,
        };
      },
      async () => {
        const userApps = await this.getUserApplication(
          this.state.selectedOppId
        );
        this.setState(() => {
          return {
            studentsArray: userApps,
            selectedStudentIdx: userApps.length ? 0 : null,
            menuItems: userApps.map((user, userIdx) => {
              return <MenuItem user={user} key={userIdx} />;
            }),
          };
        });
      }
    );
  }

  onChangeSelectedOppId = (newId) => {
    this.setState(
      () => {
        return { selectedOppId: newId, menuItems: [] };
      },
      async () => {
        const userApps = await this.getUserApplication(
          this.state.selectedOppId
        );
        this.setState(() => {
          return {
            studentsArray: userApps,
            selectedStudentIdx: userApps.length ? 0 : null,
            menuItems: userApps.map((user, userIdx) => {
              return <MenuItem user={user} key={userIdx} />;
            }),
          };
        });
      }
    );
  };

  onLastItemVisible = () => {};

  onSelect = (newIdx) => {
    this.setState({
      selectedStudentIdx: newIdx,
      statusSelected: this.state.studentsArray[newIdx].status,
    });
  };

  handleStatusChange = (event) => {
    this.setState(
      ({ studentsArray, selectedStudentIdx }) => {
        const newArray = studentsArray.map((s, index) => {
          if (index == selectedStudentIdx) {
            return { ...s, status: event.target.value };
          }
          return s;
        });
        return { studentsArray: newArray, statusSelected: event.target.value };
      },
      () => this.updateApplicationStatus()
    );
  };

  render() {
    return (
      <>
        <DiscoverNavbar links={BusinessSideNavOptions} business />
        {this.state.postedOpps ? (
          <BreakdownWrapper>
            <PostedOppsWrapper>
              <PostedOpps
                opps={this.state.postedOpps}
                selectedOppId={this.state.selectedOppId}
                onChangeSelectedOppId={this.onChangeSelectedOppId}
              />
            </PostedOppsWrapper>
            <AppliedInformationWrapper>
              {this.state.postedOpps.map((opp, idx) => {
                if (opp.opp_id == this.state.selectedOppId) {
                  return (
                    <h1 style={{ textAlign: "center" }} key={idx}>
                      Responses for {opp.title}
                    </h1>
                  );
                }
                return null;
              })}
              {this.state.menuItems.length ? (
                <ScrollMenu
                  alignCenter={true}
                  arrowLeft={ArrowLeft}
                  arrowRight={ArrowRight}
                  clickWhenDrag={false}
                  data={this.state.menuItems}
                  dragging={false}
                  hideArrows={false}
                  hideSingleArrow={true}
                  onLastItemVisible={this.onLastItemVisible}
                  onSelect={this.onSelect}
                  ref={(el) => (this.menu = el)}
                  scrollToSelected={false}
                  transition={+0.7}
                  translate={0}
                  wheel={true}
                />
              ) : (
                <Spinner />
              )}
              {this.state.selectedStudentIdx ? (
                <StudentInfoWrapper>
                  <h2>
                    {
                      this.state.studentsArray[this.state.selectedStudentIdx]
                        .name
                    }
                    's Application
                  </h2>
                  <h4>
                    Email:{" "}
                    {
                      this.state.studentsArray[this.state.selectedStudentIdx]
                        .email
                    }
                  </h4>
                  <h4>
                    Phone:{" "}
                    {
                      this.state.studentsArray[this.state.selectedStudentIdx]
                        .mobile
                    }
                  </h4>
                  <h4>
                    Additional Comments:{" "}
                    {
                      this.state.studentsArray[this.state.selectedStudentIdx]
                        .comments
                    }
                  </h4>

                  <h4>
                    {this.state.studentsArray[this.state.selectedStudentIdx]
                      .file_url ? (
                      <a
                        href={
                          this.state.studentsArray[
                            this.state.selectedStudentIdx
                          ].file_url
                        }
                        target="_blank"
                      >
                        View CV
                      </a>
                    ) : (
                      "No CV Uploaded :("
                    )}
                  </h4>
                  {this.state.statusSelected == "Submitted" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <StatusButton
                        value="Accepted"
                        bg="blue"
                        onClick={this.handleStatusChange}
                      >
                        Accept
                      </StatusButton>
                      <StatusButton
                        value="Rejected"
                        bg="red"
                        onClick={this.handleStatusChange}
                      >
                        Reject
                      </StatusButton>
                    </div>
                  ) : (
                    <h4>{`Status: ${this.state.statusSelected}`}</h4>
                  )}
                </StudentInfoWrapper>
              ) : null}
            </AppliedInformationWrapper>
          </BreakdownWrapper>
        ) : (
          <Spinner />
        )}
        <Footer />
      </>
    );
  }
}

export default PostedPage;
