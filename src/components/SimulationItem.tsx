import * as React from 'react';
import {Col} from 'react-bootstrap';

export interface Props {
  id: number;
  profile: string;
  title: string;
  rh: string;
  imf: string;
  q: string;
  kick_ns: string;
  rt: string;
  publish_time: string;
}

class SimulationItem extends React.Component<Props> {
  public render() {
    return (
      <Col md={3}>
        <h2>{this.props.title}</h2>
        <p>
          <span>Pub date: {this.props.publish_time}</span>
        </p>
        <p>
          <span>Profile: {this.props.profile}</span>
        </p>
        <p>
          <span>Rh(0): {this.props.rh}</span>
        </p>
        <p>
          <span>IMF: {this.props.imf}</span>
        </p>
        <p>
          <span>q: {this.props.q}</span>
        </p>
        <p>
          <span>Kick NS: {this.props.kick_ns}</span>
        </p>
        <p>
          <span>Rt(0): {this.props.rt}</span>
        </p>
      </Col>
    );
  }
}

export default SimulationItem;
