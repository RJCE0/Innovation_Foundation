import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewHome } from './pages/index';
import { Home } from './pages/internships';
import React from 'react';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={NewHome} exact/>
        <Route path='/internships' component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
