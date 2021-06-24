import React from "react";
import { DiscoverNavbar } from "../../../components/discover/DiscoverNavbar";
import Footer from "../../../components/layout/Footer";
import { BusinessSideNavOptions } from "../../../constants";

const { Component } = React;

export class Homepage extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <>
        <DiscoverNavbar links={BusinessSideNavOptions} business />
        <Footer />
      </>
    );
  }
}
