import * as React from 'react';
import {Nav, Navbar, NavItem, Image} from 'react-bootstrap';
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

const SimulationDetail = Loadable({
  loader: () => import('./components/SimulationDetail'),
  loading: Loading,
})

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App container">
          <Navbar inverse={true} collapseOnSelect={true} fixedTop={true} >
            <Navbar.Header>
              <a href="/">
                <Image src={process.env.PUBLIC_URL + "/images/index/logo.png"} height="50"></Image>
              </a>
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
          <Route exact={true} path="/simulation" component={Simulation}/>
          <Route path="/simulation/:id" component={SimulationDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
