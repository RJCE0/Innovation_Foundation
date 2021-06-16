import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import { config } from "../../constants";
import axios from "axios";
import OpportunityPage from "../opportunity-page/OpportunityPage";
import {
  InternshipContainer,
  InternshipsWrapper,
  InternshipContent,
  InternshipH1,
  NewlyAddedWrapper,
  NewlyAddedH4,
  Cards,
} from "./InternshipsElements";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./i.css";
import { FilterModal } from "../discover/ModalElements";
import Spinner from "../common/Spinner";
import { CardsWithFilter } from "../common/CardsWithFilter";

const MenuItem = ({ opp }) => {
  return (
    <div className={`menu-item`}>
      <OpportunityPage {...opp} />
    </div>
  );
};

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

const ArrowLeft = Arrow({ text: "<", className: "" });
const ArrowRight = Arrow({ text: ">", className: "" });

class InternshipPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCount: 0,
      opportunities: [],
      oppRecent: [],
      opportunitiesPop: [],
      show: false,
    };
    this.receivedData = false;
    this.menu = [];
    this.menuItems = [];
    this.menuItemsPopular = [];
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState(({ show }) => {
      return {
        show: !show,
      };
    });
  }

  async getOpportunities(route) {
    var result = [];
    await axios
      .get(`${config.API_URL}/${route}`)
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
    const opps = await this.getOpportunities("discover");
    this.setState({
      opportunities: opps.map((opportunity) => {
        return { ...opportunity, name: opportunity.id };
      }),
    });
    const oppRecent = await this.getOpportunities("recent");
    this.setState({
      oppRecent: oppRecent.map((opportunity) => {
        return { ...opportunity, name: opportunity.id };
      }),
    });
    const oppPop = await this.getOpportunities("internships");
    this.setState({
      opportunitiesPop: oppPop.map((opportunity) => {
        return { ...opportunity, name: opportunity.id };
      }),
    });
    this.menuItems = this.state.oppRecent.map((opportunity) => {
      return <MenuItem opp={opportunity} key={opportunity.id} />;
    });
    this.menuItemsPopular = this.state.opportunitiesPop.map((opportunity) => {
      return <MenuItem opp={opportunity} key={opportunity.id} />;
    });
    this.receivedData = true;
    this.forceUpdate();
  }

  // Adds new cards when you run out -- back-end
  onLastItemVisible = () => {};

  onUpdate = ({ translate }) => {
    this.setState({ translate });
  };

  render() {
    const menu = this.menuItems;
    const menuPop = this.menuItemsPopular;
    return (
      <div>
        <FilterModal show={this.state.show} showModal={this.handleModal} />
        <InternshipContainer id="Internships">
          <DiscoverNavbar />
          <InternshipContent>
            <InternshipH1>Internships</InternshipH1>
            <InternshipsWrapper>
              <NewlyAddedWrapper>
                <NewlyAddedH4> Newly Added Internships</NewlyAddedH4>
                <Cards>
                  <div id="contentContainer">
                    {this.receivedData ? (
                      <ScrollMenu
                        alignCenter={true}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        clickWhenDrag={false}
                        data={menu}
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
                  </div>
                </Cards>
              </NewlyAddedWrapper>
              <NewlyAddedWrapper>
                <NewlyAddedH4>Most Popular</NewlyAddedH4>
                <Cards>
                  <div id="contentContainer">
                    {this.receivedData ? (
                      <ScrollMenu
                        alignCenter={true}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        clickWhenDrag={false}
                        data={menuPop}
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
                  </div>
                </Cards>
              </NewlyAddedWrapper>
            </InternshipsWrapper>
            <h4 style={{ textAlign: "center", marginBottom: "-50px" }}>
              All Internships
            </h4>
            <CardsWithFilter />
          </InternshipContent>
          <Footer />
        </InternshipContainer>
      </div>
    );
  }
}

export default InternshipPage;
