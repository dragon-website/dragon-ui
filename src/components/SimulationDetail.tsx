import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {Props as ItemProps} from './SimulationItem';
import {Col, Grid, Row, Image, Form, FormGroup, Button, FormControl, Modal} from 'react-bootstrap';
import Select from 'react-select';

interface Params {
  id: string;
}

interface State {
  sim?: ItemProps;
  files: File[];
  selected?: any;
  show: boolean;
  photo?: string;
  emailValid: boolean;
}

interface File {
  time_range: number;
  file_name: string;
}

class SimulationDetail extends React.Component<RouteComponentProps<Params>, State> {
  email: HTMLInputElement;
  public constructor(props: RouteComponentProps<Params>, state: State) {
    super(props, state);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
    this.state = {
      files: [],
      show: false,
      emailValid: false,
    }
  }
  public handleClose() {
    this.setState({ show: false });
  }

  public handleShow() {
    this.setState({show: true});
  }

  public handleAgree() {
    this.handleClose();
    if (this.email.checkValidity() && this.state.selected) {
      fetch("/api/simulations/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "simulation_id": parseInt(this.props.match.params.id),
          "email": this.email.value,
          "file_name": this.state.selected.value,
        })
      })
      window.open("/api/simulations/downloader/" + this.props.match.params.id + "/" + this.state.selected.value);
    }
  }
  public handleEmail() {
    this.setState({
      emailValid: this.email.value.length > 0 && this.email.checkValidity(),
    })
  }

  public componentDidMount() {
    fetch("/api/simulations/detail/" + this.props.match.params.id).then(response => {
      response.json().then(json => {
        this.setState({
          sim: json.data,
          files: json.data.files,
          photo: json.data.video_path,
        });
      });
    })
  }
  public render() {
    if (this.state.sim) {
      var url: string = "http://dragon.china-vo.org";
      return (
        <Grid >
          <Row>
            <Col md={9}>
              <h1>{this.state.sim.title}</h1>
              <h3>Initial Condition</h3>
              <p>
                <span>Pub date: {this.state.sim.publish_date}</span>
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
              { this.state.photo &&
              <Image src={this.state.photo} responsive={true}/>
              }
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <Select
              options={this.state.files.map(f => ({value: f.file_name, label: f.time_range}))}
              onChange={option => {this.setState({selected: option});}}
              placeholder="select time range to download"
            />
          </Col>
          </Row>
          <br/>
          <br/>
          <Row className="container">
            <Form inline>
              <FormGroup>
                <FormControl type="email" placeholder="dragon@example.com" inputRef={(ref) =>
                  {this.email = ref}} onChange={(e) => this.handleEmail()}/>
              </FormGroup>{'  '}
                <Button bsStyle="primary" onClick={this.handleShow}
                disabled={!this.state.selected || !this.state.emailValid}>Download Data</Button>
            </Form>
          </Row>
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Body>
              <p>You should acknowledge the following Url in your paper.</p>
              <br/>
              <a href={url}>{url}</a>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.handleClose}>Close</Button>
              <Button bsStyle="primary" onClick={this.handleAgree}>Agree</Button>
						</Modal.Footer>
					</Modal>
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
