import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Employers from "./components/employers/Employers";
import Services from "./components/services/Services";
import Discover from "./components/discover/Discover";
import InternshipPage from "./components/internships/Internships";
import NotFound from "./components/not-found/NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/employers" component={Employers} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/internships" component={InternshipPage} />
            {/*<Route exact path="/mentorship" component={MentorshipPage} /> */}
            <Route exact path="/not-found" component={NotFound} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
