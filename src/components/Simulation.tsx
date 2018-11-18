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
    fetch("/api/simulations/list/all").then(response => {
      response.json().then(json => {
        this.setState({
          sims: json.data,
        });
      });
    })
  }
  public render() {
    return (
      <SimulationList sims={this.state.sims}/>
    );
  }
}
export default Simulation;
