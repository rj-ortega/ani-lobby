import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Season from './components/Season'
import Search from './components/Search'
import Profile from './components/Profile'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/season/:season' exact component={Season} />
            <Route path='/search' exact component={Search} />
            <Route path='/profile' exact component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
