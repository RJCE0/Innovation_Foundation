import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import Input from "../common/Input";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/discover");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div id="register-wrapper">
        <div style={{ textAlign: "center" }}>
          <a href="/" style={{ color: "#338CD1" }}>
            Home
          </a>
          <a href="/services" style={{ color: "#338CD1", marginLeft: 10 }}>
            Services
          </a>
          <a href="/employers" style={{ color: "#338CD1", marginLeft: 10 }}>
            Employers
          </a>
        </div>
        <div id="title-header">
          <span className="title">Innovation Foundation</span>
          <span className="sub-title">Your Future Starts Here</span>
        </div>

        <form
          className="cardContainer lght-shad"
          id="signup-container"
          onSubmit={this.onSubmit}
        >
          <span className="signupHeader">Login</span>

          {/* <input
						className="inputContainer text"
						id="email"
						data-coll="true"
						type="text"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.onChange}
						error={errors.email}
					/> */}
          <Input
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
            styles={{
              padding: "10px 12px",
              borderRadius: "4px",
              color: "#717171",
              border: "2px solid #717171",
              marginBottom: "10px",
            }}
          />

          <input
            className="inputContainer text"
            id="password"
            data-coll="true"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />

          <button id="submitLogin" className="btn flat-btn fill-btn">
            Login
          </button>
          <a
            className="signup-forgot"
            href="./register"
            style={{ marginLeft: "10px" }}
          >
            Create Account
          </a>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
