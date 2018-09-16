import * as React from 'react';

import SimulationList from './SimulationList';
import {Props as ItemProps} from './SimulationItem';

export interface Props {
}

export interface State {
  sims: ItemProps[];
}

class Simulation extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      sims: [],
    };
  }
  public componentDidMount() {
    var item: ItemProps = {
      id: 1,
      title: "D1-R7-IMF93",
      profile: "sss",
      imf: "sss",
      kick_ns: "sss",
      publish_time: "sss",
      q: "sss",
      rh: "aaa",
      rt: "sss",
    }
    const sims = [
      item,
      item,
      item,
      item,
      item,
    ];
    this.setState({
      sims: sims,
    });
  }
  public render() {
    return (
      <SimulationList sims={this.state.sims}/>
    );
  }
}
export default Simulation;
