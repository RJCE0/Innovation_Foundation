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
  NewlyAddedP,
} from "./InternshipsElements";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Button } from "react-bootstrap";
import "./i.css";
import { FilterModal } from "../discover/ModalElements";

const MenuItem = ({ something }) => {
  return (
    <div className={`menu-item`}>
      <OpportunityPage {...something} />
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
      opportunitiesPop: [],
      show: false,
    };
    this.done = false;
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
      opportunities: opps.map((el) => {
        return { el, name: el.id };
      }),
    });
    const oppPop = await this.getOpportunities("internships");
    this.setState({
      opportunitiesPop: oppPop.map((el) => {
        return { el, name: el.id };
      }),
    });
    this.menuItems = this.state.opportunities.map((el) => {
      return <MenuItem something={el.el} key={el.el.id} />;
    });
    this.menuItemsPopular = this.state.opportunitiesPop.map((el) => {
      return <MenuItem something={el.el} key={el.el.id} />;
    });
    this.done = true;
    this.forceUpdate();
  }

  // Adds new cards when you run out -- back-end
  onLastItemVisible = () => {
    // const newItems = Array(5)
    //   .fill(1)
    //   .map((el, ind) => ({ name: `item${this.state.itemsCount + ind + 1}` }));
    // this.state.opportunities = this.state.opportunities.concat(newItems);
    // this.menuItems = this.state.opportunities.map((el) => {
    //   return (
    //     <MenuItem
    //       something={el}
    //       key={el.id}
    //       selected={this.state.selected}
    //     />
    //   );
    // });
    // this.setState({
    //   itemsCount: this.state.opportunities.length,
    //   selected: this.state.selected,
    // });
  };

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
            {/* Cards for internships go here */}
            <InternshipsWrapper>
              <NewlyAddedWrapper>
                <NewlyAddedP> Newly Added Internships</NewlyAddedP>
                <div id="contentContainer">
                  {this.done ? (
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
                      // back end stuf starts
                      onSelect={this.onSelect}
                      // onUpdate={this.onUpdate}
                      // back-end stuff ends
                      ref={(el) => (this.menu = el)}
                      scrollToSelected={false}
                      transition={+0.7}
                      translate={0}
                      wheel={true}
                    />
                  ) : (
                    <h4 style={{ textAlign: "center" }}>LOADING...</h4>
                  )}
                </div>
              </NewlyAddedWrapper>
              <NewlyAddedWrapper>
                <NewlyAddedP>Most Popular</NewlyAddedP>
                <div id="contentContainer">
                  {this.done ? (
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
                      // back end stuf starts
                      onSelect={this.onSelect}
                      // onUpdate={this.onUpdate}
                      // back-end stuff ends
                      ref={(el) => (this.menu = el)}
                      scrollToSelected={false}
                      transition={+0.7}
                      translate={0}
                      wheel={true}
                    />
                  ) : (
                    <h4 style={{ textAlign: "center" }}>LOADING...</h4>
                  )}
                </div>
              </NewlyAddedWrapper>
            </InternshipsWrapper>
            {/* <div id="main-contentContainer" style={{ marginTop: "30px" }}>
              <div className="containerWrapper">
                <div id="main-filterContainer">
                  <div className="filterBtn-container">
                    <Button onClick={this.handleModal}>Filters</Button>
                  </div>
                  <div>
                    <div className="filterContainer">
                      <span className="filterType">Location</span>
                      <span className="filter-respo">London</span>
                    </div>

                    <div className="filterContainer">
                      <span className="filterType">Paid</span>
                      <span className="filter-respo">Free</span>
                    </div>
                    <div className="filterContainer">
                      <span className="filterType">Time</span>
                      <span className="filter-respo">Day</span>
                    </div>
                  </div>
                </div>

                <div
                  data-filtered="opportunities"
                  data-applied-filter-type="location, pay, dates"
                  data-applied-filter="london, free, day"
                  id="contentContainer"
                >
                  <div className="contentBox-wrapper">
                    {this.state.opportunities.map((opp, index) => {
                      return (
                        // adt for ads
                        <OpportunityPage {...opp} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div> */}
          </InternshipContent>
          <Footer />
        </InternshipContainer>
      </div>
    );
  }
}

export default InternshipPage;
