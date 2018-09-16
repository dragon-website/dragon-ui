import * as React from 'react';
import {Col, Grid, Image, Row} from 'react-bootstrap';

export default class About extends React.Component {
  public render() {
    return (
      <Grid>
        <Row className="form-group">
          <Col xs={6} xsOffset={3} md={2} mdOffset={5}>
            <h3>Our Team</h3>
            <hr/>
          </Col>
        </Row>
        <Row className="form-group">
          <Col xs={5} xsOffset={3} md={2} mdOffset={3}>
            <Image src="./images/about/u492.png" rounded={true} responsive={true}/>
          </Col>
          <Col xs={12} xsOffset={2} md={5} mdOffset={1}>
            <br/>
            <div>
              <p>国家天文台 研究员</p>
              <p>德国海德堡大学 教授</p>
              <p>2013-2015, 外国专家千人计划</p>
            </div>
            <br/>
            <div>
              <p>多体数值模拟计算专家，引力波理论专家，</p>
              <p>建成国家天文台“老虎”GPU集群</p>
              <p>首次在多体数值模拟计算中引入GPU平行计算，NBODY6++GPU</p>
            </div>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col xs={5} xsOffset={0} md={2} mdOffset={1}>
            <Image src="./images/about/u476.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={7} md={3}>
            <br/>
            <p>Name here</p>
            <p>Positio here</p>
            <p>xxxx</p>
            <p>xxxxxx</p>
            <br/>
            <p>Email: xypang@bao.ac.cn</p>
            <br/>
          </Col>
          <Col xs={5} xsOffset={0} md={2} mdOffset={1}>
            <Image src="./images/about/u480.png" rounded={true} responsive={true} />
          </Col>

          <Col xs={7} md={3}>
            <br/>
            <p>Name here</p>
            <p>Positio here</p>
            <p>xxxx</p>
            <p>xxxxxx</p>
            <br/>
            <p>Email: xypang@bao.ac.cn</p>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col xs={5} xsOffset={0} md={2} mdOffset={1}>
            <Image src="./images/about/u484.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={7} md={3}>
            <br/>
            <p>Name here</p>
            <p>Positio here</p>
            <p>xxxx</p>
            <p>xxxxxx</p>
            <br/>
            <p>Email: xypang@bao.ac.cn</p>
            <br/>
          </Col>
          <Col xs={5} xsOffset={0} md={2} mdOffset={1}>
            <Image src="./images/about/u488.png" rounded={true} responsive={true} />
          </Col>

          <Col xs={7} md={3}>
            <br/>
            <p>Name here</p>
            <p>Positio here</p>
            <p>xxxx</p>
            <p>xxxxxx</p>
            <br/>
            <p>Email: xypang@bao.ac.cn</p>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row className="form-group">
          <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
            <h3>List of International Teams</h3>
            <hr/>
          </Col>
        </Row>
        <Row>
          <p>
            In the following we will list all teams who have explicitly confirmed their interest in
            recent days to participate in this project, in the sense that they use NBODY codes for
            their scientific projects, that they are contributing with scientific input to the code
            in their specific fields and that they highly appreciate the improvement of
            accessibility and usability of our software as it will be provided here.
          </p>
        </Row>
        <br/>
        <br/>
        <Row>
          <p>Morgan MacLeod, NASA Einstein Fellow, Institute for Advanced Study, morganmacleod@gmail.com</p>
          <p>Aaron Geller, Northwestern University CIERA & The Adler Planetarium, a-geller@northwestern.edu</p>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row className="form-group">
          <Col xs={8} xsOffset={2} md={2} mdOffset={5}>
            <h3>concat us</h3>
            <hr/>
            <p>Email:  xxxxx@xxxx</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
