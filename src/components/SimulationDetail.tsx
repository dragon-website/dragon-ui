import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {Props as ItemProps} from './SimulationItem';
import {Col, Grid, Row, Image} from 'react-bootstrap';

interface Params {
  id: String;
}

interface State {
  sim?: ItemProps;
}

class SimulationDetail extends React.Component<RouteComponentProps<Params>, State> {
  public constructor(props: RouteComponentProps<Params>, state: State) {
    super(props, state);
    this.state = {
    }
  }
  public componentDidMount() {
    fetch("/api/simulations/detail/" + this.props.match.params.id).then(response => {
      response.json().then(json => {
        this.setState({
          sim: json.data,
        });
      });
    })
  }
  public render() {
    if (this.state.sim) {
      return (
        <Grid>
          <Row>
            <Col md={9}>
              <h1>{this.state.sim.title}</h1>
              <h3>Initial Condition</h3>
              <p>
                <span>Pub date: {this.state.sim.publish_time}</span>
              </p>
              <p>
                <span>Profile: {this.state.sim.profile}</span>
              </p>
              <p>
                <span>Rh(0): {this.state.sim.rh}</span>
              </p>
              <p>
                <span>IMF: {this.state.sim.imf}</span>
              </p>
              <p>
                <span>q: {this.state.sim.q}</span>
              </p>
              <p>
                <span>Kick NS: {this.state.sim.kick_ns}</span>
              </p>
              <p>
                <span>Rt(0): {this.state.sim.rt}</span>
              </p>
            </Col>
            <Col md={3}>
              <Image src="../images/index/u202.jpg" responsive={true}/>
            </Col>
          </Row>
        </Grid>
        );
    } else {
      return (
        <div/>
      );
    }
  }
}
export default SimulationDetail;
