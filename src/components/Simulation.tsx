import * as React from 'react';

import SimulationList from './SimulationList';
import {Props as ItemProps} from './SimulationItem';
import {Row, Grid, Col, Button, Modal} from 'react-bootstrap';

export interface Props {
}

export interface State {
  sims: ItemProps[];
  sort?: string;
  show: boolean;
}

class Simulation extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      sims: [],
      show: false,
    };
  }
  public componentDidMount() {
    fetch("/api/simulations/list/all").then(response => {
      response.json().then(json => {
        this.setState({
          sims: json.data,
        });
      });
    })
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  public render() {
    var sims: ItemProps[];
    if (!this.state.sort) {
      sims = this.state.sims;
    } else {
      sims = [...this.state.sims];
      if ("sort-by-time" == this.state.sort) {
        sims.sort((a, b) => b.publish_date.localeCompare(a.publish_date));
      } else if (this.state.sort == "sort-by-name") {
        sims.sort((a, b) => a.title.localeCompare(b.title))
      }
    }
    return (
      <Grid>
        <br/>
        <br/>
        <Row>
          <Col mdOffset={9}>
            <Button type="button" className="btn btn-default btn-lg" onClick={(e) =>
              this.handleShow()}>
              <span>Know about Dragon Simulation </span>
              <span className="glyphicon glyphicon-book" aria-hidden="true"></span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <a href="#sort-by-time" role="button" onClick={(e) => this.setState({sort: "sort-by-time"})}>
              <span className="glyphicon glyphicon-sort-by-attributes-alt" aria-hidden="true">Sorted by Time</span>
            </a>
          </Col>
          <Col md={2}>
            <a href="#sort-by-name" role="button" onClick={(e) => this.setState({sort: "sort-by-name"})}>
              <span className="glyphicon glyphicon-sort-by-attributes" aria-hidden="true">Sorted by Name</span>
            </a>

          </Col>
        </Row>
        <br/>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dragon Simulation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>DRAGON simulations, is the first realistic direct simulation of a globular cluster with million stars using our NBODY6++GPU code (see also <a href="http://silkroad.bao.ac.cn" target="_blanck">http://silkroad.bao.ac.cn/dragon/</a> ]).</p>
            <br/>
            <p>The DRAGON simulation provides a computational analysis which provides a context for analysis of FAST observation .  The Drift-scan pulsar surveys of FAST has carried out to searching for pulsars in globular clusters. The DRAGON simulations can in particular, predict the physical and kinematic properties of neutron stars / pulsars for different stellar environments and different primordial binary distributions in the model. These can then be predicted to sets of pulsar observations obtained by FAST. Pulsars with the fastest spins are youngest; these pulsars are likely in, or were recently ejected from, the high—density stellar environments that are amongst the objects of our numerical investigation.  </p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        onClick={this.handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
  <SimulationList sims={sims}/>
</Grid>
);
  }
}
export default Simulation;
