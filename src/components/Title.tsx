import * as React from 'react';
import {Row} from 'react-bootstrap';

import './Title.css';

class Title extends React.Component<object, object, string> {
  public render() {
    return (
      <Row className="text-center Title">
        <div>
          <h3>{this.props.children}</h3>
          <p><hr/></p>
        </div>
      </Row>
    );
  }
}
export default Title;
