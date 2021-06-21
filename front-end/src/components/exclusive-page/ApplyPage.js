import React from "react";
import styled from "styled-components";
import Input from "../common/Input";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import { withRouter } from "react-router";
import axios from "axios";
import { config } from "../../constants.js";

const InputFile = styled.input`
  padding: 10px 0px;
`;

class ApplyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opp_id: this.props.match.params.handle.split("=")[1],
      name: "",
      email: "",
      mobile: "",
      additionalComments: "",
      file: null,
      user_id: 0,
    };
  }

  async addInternships(parameters) {
    await axios
      .post(`${config.API_URL}/apply`, {
        params: {
          body: parameters,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.addInternships(this.state);
    window.location.replace("/my-applications");
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeFile = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  render() {
    return (
      <>
        <DiscoverNavbar />
        <form
          className="cardContainer lght-shad"
          id="signup-container"
          onSubmit={this.onSubmit}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="signupHeader">Apply Here</span>
          </div>
          <Input
            placeholder="Enter your Full Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            styles={{
              padding: "10px 12px",
              borderRadius: "4px",
              color: "#000000",
              border: "2px solid #717171",
              marginBottom: "10px",
            }}
          />

          <Input
            placeholder="Enter your Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            styles={{
              padding: "10px 12px",
              borderRadius: "4px",
              color: "#000000",
              border: "2px solid #717171",
              marginBottom: "10px",
            }}
          />

          <Input
            placeholder="Enter your Mobile Number"
            name="mobile"
            value={this.state.mobile}
            onChange={this.onChange}
            styles={{
              padding: "10px 12px",
              borderRadius: "4px",
              color: "#000000",
              border: "2px solid #717171",
              marginBottom: "10px",
            }}
          />

          <Input
            placeholder="Additional Comments"
            name="additionalComments"
            value={this.state.additionalComments}
            onChange={this.onChange}
            styles={{
              padding: "10px 12px",
              borderRadius: "4px",
              color: "#000000",
              border: "2px solid #717171",
              marginBottom: "10px",
              height: 150,
              width: "100%",
              height: "35vh",
              backgroundColor: "#f3f3f3",
              boxSizing: "border-box",
              outline: "none",
              fontWeight: "bolder",
              fontSize: 18,
            }}
            area
          />
          <div
            style={{
              display: "flex",
              padding: "10px 0px",
              width: "100%",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <InputFile
              type="file"
              id="myFile"
              onChange={this.onChangeFile}
              name="file"
            />

            <button type="Submit" className="btn flat-btn fill-btn">
              Apply Now!
            </button>
          </div>
        </form>
        <Footer />
      </>
    );
  }
}

export default withRouter(ApplyPage);
