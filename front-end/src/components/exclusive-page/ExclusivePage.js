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
  ExclusiveHeaderLeft,
  ApplyButtonsWrapper,
  ApplyButtons,
  ApplyButtonComponent,
} from "./ExclusiveElements";
import logo from "../../img/innovation-logo.png";
import { withRouter } from "react-router";
import Spinner from "../common/Spinner";

class ExclusivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opps: null,
    };
    this.oppId = this.props.match.params.handle.split("=")[1];
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
    // await this.sleep(5000);
    const params = {
      oppId: this.oppId
    };
    this.setState({
      opps: await this.getOpportunities("exclusive", params)
    });
  }

  render() {
    // const opp = useLocation().state;
    return (
      <>
        <DiscoverNavbar />
        <ExclusivePageContainer>
          {this.state.opps ? (
            <ExclusiveHeader>
              <ExclusiveHeaderLeft>
                <ExclusiveImage src={logo} />
                <ExclusiveTitle>{this.state.opps.title}</ExclusiveTitle>
              </ExclusiveHeaderLeft>
              <ApplyButtonsWrapper>
                <ApplyButtons>
                  <ApplyButtonComponent backgroundColor="#256de1">
                    Apply
                  </ApplyButtonComponent>
                  <ApplyButtonComponent backgroundColor="#f8c51c">
                    Favourite
                  </ApplyButtonComponent>
                </ApplyButtons>
              </ApplyButtonsWrapper>
            </ExclusiveHeader>
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
