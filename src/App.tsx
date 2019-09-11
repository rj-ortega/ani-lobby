import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'
import Season from './components/Season'
import Search from './components/Search'
import Profile from './components/Profile'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:season' exact component={Season} />
          <Route path='/search' exact component={Search} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/callback/login' exact component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
