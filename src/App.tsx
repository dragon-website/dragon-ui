import * as React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import * as Loadable from 'react-loadable';

import './App.css';

const Loading = () => <div>Loading...</div>;


const About = Loadable({
  loader: () => import('./components/About'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
})

const Simulation = Loadable({
  loader: () => import('./components/Simulation'),
  loading: Loading,
})

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App container">
          <Navbar inverse={true} collapseOnSelect={true} fixedTop={true} >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Dragon</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer exact={true} to="/">
                  <NavItem>
                    Start Here
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/simulation">
                  <NavItem>
                    Simulation
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                  <NavItem>
                    About
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/simulation" component={Simulation}/>
        </div>
      </Router>
    );
  }
}

export default App;
