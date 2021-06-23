import React from "react";
import styled from "styled-components";
import Input from "../common/Input";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import { withRouter } from "react-router";
import axios from "axios";
import { config } from "../../constants.js";
import { StudentSideNavOptions } from "../../constants.js";
import S3FileUpload from "react-s3";
import Spinner from "../common/Spinner";

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
      file_url: "",
      user_id: 0,
      applied: false,
    };
  }
  // Uploads file and returns link to file
  async aws_upload(file) {
    const configs = {
      bucketName: "innovation-drp-bucket",
      dirName: "cv",
      region: "eu-west-2",
      accessKeyId: "AKIAYSN3QHAZOZLZ7XNB",
      secretAccessKey: "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",
    };

    var result = {};

    await S3FileUpload.uploadFile(file, configs)
      .then((data) => {
        result = data;
      })
      .catch((err) => console.error(err));

    return result.location;
  }

  onSubmit = (e) => {
    const win = window;
    e.preventDefault();
    this.setState({ applied: true }, async () =>
      this.setState(
        { file_url: await this.aws_upload(this.state.file) },
        async () => {
          await axios
            .post(`${config.API_URL}/apply`, {
              params: {
                body: this.state,
              },
            })
            .then(win.location.replace("/my-applications"))
            .catch((error) => {
              console.log(error);
            });
        }
      )
    );
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
        <DiscoverNavbar links={StudentSideNavOptions} student />
        {this.state.applied ? (
          <div style={{ padding: "20px 0 20px 0" }}>
            <Spinner />
            <h3 style={{ textAlign: "center" }}>
              Uploading CV and Sending Your Application...
            </h3>
          </div>
        ) : (
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
              <span className="signupHeader">
                Apply to{" "}
                {this.props.match.params.handle
                  .split("&")[0]
                  .replace(/-/g, " ")
                  .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                    letter.toUpperCase()
                  )}
              </span>
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
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1.3rem",
                }}
              >
                Upload your CV:
                <InputFile
                  type="file"
                  id="myFile"
                  onChange={this.onChangeFile}
                  name="file"
                />
              </div>
              <button type="Submit" className="btn flat-btn fill-btn">
                Apply Now!
              </button>
            </div>
          </form>
        )}
        <Footer />
      </>
    );
  }
}

export default withRouter(ApplyPage);
