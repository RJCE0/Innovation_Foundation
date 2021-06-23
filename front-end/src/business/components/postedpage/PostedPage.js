import React, { Component } from 'react'
import { DiscoverNavbar } from "../../../components/discover/DiscoverNavbar"
import Footer from "../../../components/layout/Footer"
import { BusinessSideNavOptions } from "../../../constants"
import styled from 'styled-components'
import Spinner from "../../../components/common/Spinner";

const BreakdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 20px 20px 20px 20px;
  font-family: 'Nunito';
  background-color: #f1f1f1;
  /* overflow: scroll; */
`
const PostedOppsWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  border: none;
  border-right: 1px solid black;

  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { /* Chrome */
    display: none;
  }
`

const AppliedInformationWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  border: none;
  border-left: 1px solid black;

  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { /* Chrome */
    display: none;
  }
`
const dummy = [
  {
    opp_title: "Facebook",
    opp_id: 5,
    summary: "This is an internship that will break you. (f)"
  },
  {
    opp_title: "Google",
    opp_id: 15,
    summary: "This is an internship that will break you (g)."
  },
  {
    opp_title: "Amazon",
    opp_id: 11,
    summary: "This is an internship that will break you.(a)"
  },
  {
    opp_title: "Netflix",
    opp_id: 69,
    summary: "This is an internship that will break you.(n)"
  },
  {
    opp_title: "Spotify",
    opp_id: 420,
    summary: "This is an internship that will break you.(s)"
  }
]

class PostedOpps extends Component {

  render() {
    return <div style={{ width: '100%', height: '100%' }}>KALLO</div>
  }
}

class AppliedInformation extends Component {

  render() {
    return <div style={{ width: '100%', height: '100%' }}>KALLO</div>
  }
}

class PostedPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postedOpps: null,
      selectedOppId: null,
    }
  }

  componentDidMount() {
    this.setState(() => {
      return { postedOpps: dummy, selectedOppId: dummy[0].opp_id };
    })
  }

  onChangeSelectedOppId = (newId) => {
    this.setState(() => {
      return { selectedOppId: newId };
    })
  }

  render() {
    if (!this.state.postedOpps) {
      return <Spinner />
    }

    return (
      <>
        <DiscoverNavbar links={BusinessSideNavOptions} business />
        <BreakdownWrapper>
          <PostedOppsWrapper>
            <PostedOpps />
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
