import * as React from 'react';
import {Col, Grid, Image, Row} from 'react-bootstrap';
import {Button, Jumbotron} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import {Props as ItemProps} from './SimulationItem';
import SimulationList from './SimulationList';
import Title from './Title';

interface State {
  lastestSims: ItemProps[];
  popularSims: ItemProps[];
}

export default class Home extends React.Component<object, State> {
  public constructor(props: Object, state: State) {
    super(props, state);
    this.state = {
      lastestSims: [],
      popularSims: [],
    }
  }

  public componentDidMount() {
    fetch("/api/simulations/list/latest").then(response => {
      response.json().then(json => {
        this.setState({
          lastestSims: json.data,
        });
      });
    })
    fetch("/api/simulations/list/popular").then(response => {
      response.json().then(json => {
        this.setState({
          popularSims: json.data,
        });
      });
    });
  }

  public render() {
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Col md={9}>
              <p>
                Direct N-body simulations, where N is the number of stars in a star cluster, represent the most powerful tool to study globular cluster evolution. They allow following the evolution of many stars as gravitating particles directly, resolving their orbits in the cluster, their interactions with other objects, their stellar evolution, mass and radius changes, direct collisions and mergers. To properly resolve the secular relaxation processes in the cluster a high resolution in time and space is required, and direct N-body codes such as the NBODY code family originally developed by Aarseth are the best compromise between performance and accuracy. Asymptotically the computational time required scales with N2, for each orbital time scale resolved, and with an even higher power of N (less than 3) per physical (relaxation) time scale. Only the use of GRAPE accelerator hardware in the 90’s and the current use of graphical processing units (GPU) in parallel in large supercomputers has made it possible to reach a million-body simulation, the first realistic direct simulation of a globular cluster using our NBODY6++GPU code (named the <strong>DRAGON</strong> simulations [Want et al. 2016, see also <a href="http://silkroad.bao.ac.cn/dragon/" target="_blanck">http://silkroad.bao.ac.cn/dragon/</a> ]). Roughly speaking, the use of more parallel nodes with GPUs compensates one power of N when increasing the particle number.
              </p>
              <p>
                The DRAGON simulation provides a computational analysis which provides a context for analysis of FAST observation. The Drift-scan pulsar surveys of FAST has carried out to searching for pulsars in globular clusters. The DRAGON simulations can in particular, predict the physical and kinematic properties of neutron stars / pulsars for different stellar environments and different primordial binary distributions in the model. These can then be predicted to sets of pulsar observations obtained by <strong>FAST</strong>. Pulsars with the fastest spins are youngest [25]; these pulsars are likely in, or were recently ejected from, the high—density stellar environments that are amongst the objects of our numerical investigation.
              </p>
              <p>
                The wealth of the DRAGON simulation data shall be public and benefit all astronomers, such that every interested team (especially observational) can access the data and observe our simulated star cluster models as if it were using a real telescope.
              </p>
            </Col>
            <Col md={3}>
              <Image src="./images/index/home.jpg" responsive={true}/>
            </Col>
          </Row>
          <p className="text-center">
            <LinkContainer to="/simulation" >
              <Button bsStyle="primary" bsSize="large" >Start to get data</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
        <Title>Latest Simulations</Title>
        <SimulationList sims={this.state.lastestSims}/>
        <Title>Most popular Simulations</Title>
        <SimulationList sims={this.state.popularSims}/>
      </Grid>
      );
  }
}

