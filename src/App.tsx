import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './components/Search'
import Season from './components/Season'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import Home from './components/Home'


class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/season/:season' exact component={Season} />
          <Route path='/search' exact component={Search} />
          <Route path='/profile' exact component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
