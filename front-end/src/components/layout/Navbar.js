import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div id="user-nav-profile">
        <Link className="btn flat-btn clear-btn" to="/discover">
          Discover
        </Link>
        {/* <Link className="btn flat-btn clear-btn" to="/dashboard">
					Saved
				</Link> */}
        <Link className="btn flat-btn clear-btn" to={`/profile`}>
          Profile
        </Link>
        <button
          className="btn flat-btn fill-btn"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have a Gravatar connected to your email to display an image"
          />
          <span>Logout</span>
        </button>
      </div>
    );

    const guestLinks = (
      <div id="user-nav-profile">
        <Link className="btn flat-btn clear-btn" to="/register">
          Sign Up
        </Link>
        <Link className="btn flat-btn clear-btn" to="/login">
          Login
        </Link>
      </div>
    );

    return (
      <nav id="app-header">
        <div className="nav-g g-1">
          <div className="nav-el IN-logo">
            <a href="/">
              <span className="IN-title">Innovation</span>
              <span className="IN-COM-title">Foundation</span>
            </a>
          </div>
          <div className="nav-el home-search">
            <div className="nav-links">
              <a href="services" className="user-btn">
                Services
              </a>
              {/* <a href="#" className="user-btn">
								Blog
							</a> */}
              <a href="employers" className="user-btn">
                For Employers
              </a>
            </div>
          </div>
        </div>
        <div id="user-nav" className="nav-el nav-g g-2">
          <div id="user-nav-profile">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(
  Navbar
);
