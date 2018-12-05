import * as React from 'react';
import {Row} from 'react-bootstrap';

import Item, {Props} from './SimulationItem';

import './SimulationList.css';

export interface PropsList {
  sims: Props[];
}

class SimulationList extends React.Component<PropsList> {
  public render() {
    return (
      <Row className="show-grid row-eq-height">
        {this.props.sims.map(item => <Item {...item} key={item.id}/>)}
      </Row>
    );
  }
}
export default SimulationList;
