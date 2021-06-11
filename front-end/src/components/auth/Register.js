import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "../../css/register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
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
          <span className="title">Innovation Community</span>
          <span className="sub-title">All of London, In One Community</span>
        </div>

        <form
          className="cardContainer lght-shad"
          id="signup-container"
          noValidate
          onSubmit={this.onSubmit}
        >
          <span className="signupHeader">Create an Account</span>

          <div className="inputSplit">
            <input
              className="inputContainer text"
              data-coll="true"
              id="firstname"
              type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.onChange}
              error={errors.firstname}
            />
            <input
              className="inputContainer text"
              id="lastname"
              data-coll="true"
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.onChange}
              error={errors.lastname}
            />
          </div>

          <input
            className="inputContainer text"
            id="email"
            data-coll="true"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
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
          <input
            className="inputContainer text"
            id="password2"
            data-coll="true"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
          />

          <button id="submitLogin" className="btn flat-btn fill-btn">
            Sign up
          </button>
          <a
            className="signup-forgot"
            href="./login"
            style={{ marginLeft: "15px" }}
          >
            Already have an account?
          </a>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
