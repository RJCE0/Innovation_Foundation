import React from "react";
import styled from "styled-components";
import { DiscoverNavbar } from "../../../components/discover/DiscoverNavbar";
import Footer from "../../../components/layout/Footer";
import { withRouter } from "react-router";
// import axios from "axios";
import { BusinessSideNavOptions, config } from "../../../constants";
import Input from "../../../components/common/Input";
import Select from "react-select";
import { filterOptions } from "../../../components/discover/ModalElements";

const InputFile = styled.input`
  padding: 10px 0px;
`;

const options = [
  { label: "Any", value: 0, key: 0 },
  { label: "London", value: 1, key: 1 },
  { label: "Amsterdam", value: 2, key: 2 },
];

class ApplyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      summary: "",
      pay: 0,
      role: "",
      skills_gained: "",
      requirements: "",
      c_description: "",
      image: null,
    };
  }

  async addInternship(parameters) {
    var result = [];
    await axios
      .post(`${config.API_URL}/create`, {
        params: {
          body: parameters,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.addInternships(this.state);
    // window.location.replace("/my-applications");
  };

  onChangeLocation = (e) => {
    this.setState(() => {
      return { location: e.label };
    });
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
        <DiscoverNavbar links={BusinessSideNavOptions} business />
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
            <span className="signupHeader">Create Internship Post</span>
          </div>
          <Input
            placeholder="Enter a title for the opportunity"
            name="title"
            value={this.state.title}
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
            placeholder="Summary (100 characters max)"
            name="summary"
            value={this.state.summary}
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
            maxLength="100"
          />
          <Input
            placeholder="What does the role involve? (1500 characters max)"
            name="role"
            value={this.state.role}
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
            maxLength="1500"
          />
          <Input
            placeholder="Skills Gained (1500 characters max)"
            name="skills_gained"
            value={this.state.skills_gained}
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
            maxLength="1500"
          />
          <Input
            placeholder="Enter Company Description"
            name="c_description"
            value={this.state.c_description}
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
            maxLength="1500"
          />
          <Input
            placeholder="Requirements (1500 characters max)"
            name="requirements"
            value={this.state.requirements}
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
            maxLength="1500"
          />
          <div
            style={{
              display: "flex",
              padding: "10px 0px",
              width: "100%",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <label htmlFor="location" style={{ width: "50%" }}>
              <Select
                id="location"
                name="location"
                onChange={this.onChangeLocation}
                defaultValue={options[0]}
                filterOptions={filterOptions(options)}
                options={options}
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 0px",
              width: "100%",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <label htmlFor="myFile">
              Upload Logo:{"\t"}
              <InputFile
                type="file"
                id="myFile"
                onChange={this.onChangeFile}
                name="image"
              />
            </label>

            <button type="Submit" className="btn flat-btn fill-btn">
              Post
            </button>
          </div>
        </form>
        <Footer />
      </>
    );
  }
}

export default withRouter(ApplyPage);
