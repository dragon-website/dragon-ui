import * as React from 'react';
import {Col, Grid, Image, Row} from 'react-bootstrap';
import {Button, Jumbotron} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Home extends React.Component {
  public render() {
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Col md={9}>
              <p>
                The simulations carried out using NBODY6++GPU as part of the international DRAGON project (link to http://silkroad.bao.ac.cn/dragon/) set a new standard in globular cluster modeling. They have been possible after significant improvements of the simulation software on the laohu supercomputer of the Center of Information and Computing at National Astronomical Observatories, Chinese Academy of Sciences. The code has excellent parallel performance using, simultaneously, multi-node parallelization, OpenMP on the nodes and general-purpose Kepler K20 graphic cards acceleration (GPGPUs) to compute the gravitational forces between the stars. A typical Dragon star cluster simulation used 8 nodes (containing 16 GPUs) with 160 CPU cores and about 32k GPU threads, a wall clock time of order 650 hours per Gyr.
              </p>
              <p>
                The DRAGON simulations exhibit a large number of central black holes – remnants of massive stars with masses of ten to fifty solar masses – they form a dense nuclear cluster in the center of the system (Fig. 3, panel with white background); we also prepare synthetic color magnitude diagrams (CMD) from the simulations as e.g. observed by the Hubble Space Telescope. The top panel of Fig. 4 shows a CMD with zero photometric errors and infinite sensitivity, revealing the ultimate quality of observations with the supercomputer. To obtain these data the Cambridge stellar evolution codes (an integral feature of NBODY6++GPU) and COCOA, a software package for synthetic photometry of our Polish collaborators from Nicolaus Copernicus Astronomical Center have been used (see Wang et al. 2016). For the lower panel of Fig. 4 a typical distance to a Galactic globular cluster has been assumed and the specification of the cameras on board the Hubble space telescope using COCOA.
              </p>
            </Col>
            <Col md={3}>
              <Image src="./images/index/u202.jpg" responsive={true}/>
              <Image src="./images/index/u204.jpg" responsive={true}/>
            </Col>
          </Row>
          <p className="text-center">
            <LinkContainer to="/simulation" >
              <Button bsStyle="primary" bsSize="large" >Start to get data</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
      </Grid>
      );
  }
}

