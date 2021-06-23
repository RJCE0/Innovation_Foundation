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
  overflow: scroll;
  align-items: center;
  border: none;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 30px 20px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

class PostedOpps extends Component {
  render() {
    return this.props.opps.map((obj, index) => {
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
    });
  }
}

const IconNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  background-color: ${(props) => {
    console.log(props.clr);
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
        <Avatar
          src={AvatarIcon}
          clr={colours[Math.floor(Math.random() * colours.length)]}
        />
        <h3 style={{ textAlign: "center" }}>{user.name}</h3>
      </IconNameWrapper>
    </div>
  );
};

class PostedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedOpps: null,
      selectedOppId: null,
      menuItems: [],
      studentsArray: null,
      selectedStudent: null,
    };
    this.menu = [];
  }

  async getApplications() {
    var result = [];
    await axios
      .get(`${config.API_URL}/apply`)
      .then((res) => {
        const applications = res.data;
        console.log(applications);
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
        console.log(opportunities);
        result = opportunities;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
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
            menuItems: userApps.map((user, userIdx) => {
              return <MenuItem user={user} key={userIdx} />;
            }),
          };
        });
      }
    );
  };

  onLastItemVisible = () => {};

  onSelect = () => {
    console.log(this.state);
  };
  // [{name: something, email: somethihng, number: something, comments: "", file_url: something, status: something }]
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
