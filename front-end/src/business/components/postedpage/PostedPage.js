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
  justify-content: center;
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

const dummy = [
  {
    opp_title: "Software Engineering internship",
    opp_id: 5,
    summary: "This is an internship that will break you.",
  },
  {
    opp_title: "Front-end internship",
    opp_id: 15,
    summary: "This is an internship that will break you.",
  },
  {
    opp_title: "Back-end internship",
    opp_id: 11,
    summary: "This is an internship that will break you.",
  },
  {
    opp_title: "Janitor internship",
    opp_id: 69,
    summary: "This is an internship that will not break you.",
  },
  {
    opp_title: "Get Bullied internship",
    opp_id: 420,
    summary: "This is an internship that will break you.",
  },
  {
    opp_title: "Corner Shop internship",
    opp_id: 52,
    summary: "This is an internship that will not break you.",
  },
];

class PostedOpps extends Component {
  render() {
    return this.props.opps.map((obj, index) => {
      return (
        <ApplicationsCard
          key={index}
          act={this.props.selectedOppId == obj.opp_id}
          onClick={() => this.props.onChangeSelectedOppId(obj.opp_id)}
        >
          <h3>{obj.opp_title}</h3>
          <h6>
            This is the summary of something. I am checking what happens when
            there is overflow because I want to and beacuse I can and because I
            am bored. Here is the actual sumary: {obj.summary} There you go.
          </h6>
          <h6>
            This is the summary of something. I am checking what happens when
            there is overflow because I want to and beacuse I can and because I
            am bored. Here is the actual sumary: {obj.summary} There you go.
          </h6>
        </ApplicationsCard>
      );
    });
  }
}

class AppliedInformation extends Component {
  render() {
    return <div style={{ width: "100%", height: "100%" }}>KALLO</div>;
  }
}

const MenuItem = () => {
  return <div className={`menu-item`}>Kallo</div>;
};

class PostedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedOpps: null,
      selectedOppId: null,
      menuItems: [],
    };
    this.menu = [];
  }

  componentDidMount() {
    this.setState(() => {
      return { postedOpps: dummy, selectedOppId: dummy[0].opp_id };
    });
  }

  onChangeSelectedOppId = (newId) => {
    this.setState(() => {
      return { selectedOppId: newId };
    });
  };

  onLastItemVisible = () => {};

  onSelect = () => {
    console.log(this.state);
  };

  render() {
    if (!this.state.postedOpps) {
      return <Spinner />;
    }

    return (
      <>
        <DiscoverNavbar links={BusinessSideNavOptions} business />
        <BreakdownWrapper>
          <PostedOppsWrapper>
            <PostedOpps
              opps={dummy}
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
        <Footer />
      </>
    );
  }
}

export default PostedPage;
