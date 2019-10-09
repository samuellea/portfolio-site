import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      // <React.Fragment >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      // </React.Fragment >
    )
  }
}


export default App;
