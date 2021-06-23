import React, { Component } from "react";
import { DiscoverNavbar } from "../../../components/discover/DiscoverNavbar";
import Footer from "../../../components/layout/Footer";
import { BusinessSideNavOptions } from "../../../constants";
import styled from "styled-components";
import Spinner from "../../../components/common/Spinner";

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

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const dummy = [
  {
    opp_title: "Facebook internship",
    opp_id: 5,
    summary: "This is an internship that will break you. (f)",
  },
  {
    opp_title: "Google internship",
    opp_id: 15,
    summary: "This is an internship that will break you (g).",
  },
  {
    opp_title: "Amazon internship",
    opp_id: 11,
    summary: "This is an internship that will break you.(a)",
  },
  {
    opp_title: "Netflix internship",
    opp_id: 69,
    summary: "This is an internship that will break you.(n)",
  },
  {
    opp_title: "Spotify internship",
    opp_id: 420,
    summary: "This is an internship that will break you.(s)",
  },
  {
    opp_title: "Corner Shop internship",
    opp_id: 52,
    summary: "This is an internship that will not break you.(l)",
  },
];

class AppliedInformation extends Component {
  render() {
    return <div style={{ width: "100%", height: "100%" }}>KALLO</div>;
  }
}

class PostedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedOpps: null,
      selectedOppId: null,
    };
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

  render() {
    if (!this.state.postedOpps) {
      return <Spinner />;
    }

    return (
      <>
        <DiscoverNavbar links={BusinessSideNavOptions} business />
        <BreakdownWrapper>
          <PostedOppsWrapper>
            {dummy.map((obj, index) => {
              return (
                <ApplicationsCard
                  key={index}
                  act={this.state.selectedOppId == obj.opp_id}
                  onClick={() => this.onChangeSelectedOppId(obj.opp_id)}
                >
                  <h3>{obj.opp_title}</h3>
                  <h6>
                    This is the summary of something. I am checking what happens
                    when there is overflow because I want to and beacuse I can
                    and because I am bored. Here is the actual sumary:{" "}
                    {obj.summary} There you go.
                  </h6>
                  <h6>
                    This is the summary of something. I am checking what happens
                    when there is overflow because I want to and beacuse I can
                    and because I am bored. Here is the actual sumary:{" "}
                    {obj.summary} There you go.
                  </h6>
                  <h6>
                    This is the summary of something. I am checking what happens
                    when there is overflow because I want to and beacuse I can
                    and because I am bored. Here is the actual sumary:{" "}
                    {obj.summary} There you go.
                  </h6>
                </ApplicationsCard>
              );
            })}
          </PostedOppsWrapper>
          <AppliedInformationWrapper>
            <AppliedInformation />
          </AppliedInformationWrapper>
        </BreakdownWrapper>
        <Footer />
      </>
    );
  }
}

export default PostedPage;
