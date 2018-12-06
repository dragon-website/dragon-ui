import * as React from 'react';
import {Col, Grid, Image, Row} from 'react-bootstrap';

import Title from './Title';
import './About.css';

export default class About extends React.Component {
  public render() {
    return (
      <Grid>
        <Title>Our Team</Title>
        <Row className="form-group row-eq-height">
          <Col xs={6} xsOffset={3} md={2} mdOffset={3} className="vertical-center">
            <Image src="./images/about/Rainer-Spurzem.png" rounded={true} responsive={true}/>
          </Col>
          <Col xs={12} xsOffset={0} md={6} mdOffset={0} className="vertical-center">
            <div>
              <p><strong>Prof. Dr. Rainer Spurzem</strong></p>
              <p><strong>Position:</strong> Research Professor at NAOC, adjunct at KIAA apl. Professor at Heidelberg University Research Fellow at Frankfurt Institute for Advanced Study</p>
              <p><strong>Research interest:</strong> Stellar Dynamics, Star Clusters, Black Holes,      Galactic Nuclei, Gravitational Waves, Many Core Supercomputing and Parallel Programming</p>
              <p><strong>Contact:</strong> spurzem_at_ari.uni-heidelberg.de</p>
            </div>
          </Col>
        </Row>
        <Row className="row-eq-height">
          <Col xs={6} xsOffset={3} md={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Peter-Berczik.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={12} md={4} mdOffset={0} className="vertical-center">
            <div>
              <p><strong>Dr. Peter Berczik</strong></p>
              <p><strong>Position:</strong> Senior Silk Road Project Postdoc NAOC PIFI International Fellow at Main Astronomical Observatory,   NASU</p>
              <p><strong>Research interest:</strong> N-body, SPH, chemodynamical modelling of galaxies, galactic centre dynamics, star cluster evolution. SMBBH & SMSBH evolution in the GC, Post-Newtonian dynamics; AD dynamics around SMBH’s.</p>
              <p><strong>Contact:</strong> berczik_at_ari.uni-heidelberg.de</p>
            </div>
          </Col>
          <Col xs={6} xsOffset={3} md={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Thijs.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={12} md={4} mdOffset={0} className="vertical-center">
            <div>
              <p><strong>Dr. M.B.N. (Thijs) Kouwenhoven</strong></p>
              <p><strong>Position:</strong> Senior Associate Professor at the Department of Mathematical Sciences at Xi'an Jiaotong-Liverpool University (XJTLU) in Suzhou, China.  Director of the International Astronomical Union East-Asia Regional Office of Astronomy for Development </p>
              <p><strong>Research interest:</strong> the dynamical evolution of planetary systems, binary/multiple systems, and star clusters.</p>
              <p><strong>Contact:</strong> t.kouwenhoven_at_xjtlu.edu.cn</p>
            </div>
          </Col>

        </Row>
        <Row className="row-eq-height">
          <Col xs={6} xsOffset={3} md={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Li-Shuo.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={12} md={4} className="vertical-center">
            <div>
              <p><strong>Dr. Li Shuo</strong></p>
              <p><strong>Position:</strong> Assistant researcher in National Astronomical Observatory of China</p>
              <p><strong>Research interest:</strong> Dynamical co-evolution of dense star clusters and SMBHs in galactic center.</p>
              <p><strong>Contact:</strong> lishuo_at_nao.cas.cn</p>
            </div>
          </Col>
          <Col xs={6} xsOffset={3} md={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Xiaoying-Pang.png" rounded={true} responsive={true} />
          </Col>

          <Col xs={12} md={4} className="vertical-center">
            <div>
              <p><strong>Dr. Xiaoying Pang</strong></p>
              <p><strong>Position:</strong> Senior lecturer at Shanghai institute of Technology</p>
              <p><strong>Research interest:</strong> star cluster dynamics, formation, evolution and disruption of Galactic open clusters</p>
              <p><strong>Contact:</strong> xypang_at_bao.cas.cn</p>
            </div>
          </Col>
        </Row>
        <Row className="row-eq-height">
          <Col xs={6} xsOffset={3} md={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Long-Wang.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={12} md={4} className="vertical-center">
            <div>
              <p><strong>Dr. Long Wang</strong></p>
              <p><strong>Position:</strong> Alexander von Humboldt fellow at Argelander-Institut fuer Astronomie, University of Bonn, Germany</p>
              <p><strong>Research interest:</strong> massive star cluster dynamical modelling, the particle N-body simulation code development using the high performance computers with new architecture of Hardware.</p>
              <p><strong>Contact:</strong> longwang.astro_at_gmail.com</p>
            </div>
          </Col>
          <Col xs={6} xsOffset={3} md={2} sm={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Jongsuk-Hong.png" rounded={true} responsive={true} />
          </Col>

          <Col xs={12} md={4} className="vertical-center">
            <div>
              <p><strong>Dr. Jongsuk Hong</strong></p>
              <p><strong>Position:</strong> Postdoc fellow at Kavli Institute for Astronomy and Astro-physics, Peking University</p>
              <p><strong>Research interest:</strong> stellar dynamics, numerical simulations on globular clusters, black hole binary mergers with gravitational waves, cataclysmic variables and other X-ray binaries, multiple populations and blue straggler stars.  </p>
            </div>
          </Col>
        </Row>
        <Row className="row-eq-height">
          <Col xs={6} xsOffset={3} md={2} mdOffset={0} className="vertical-center">
            <Image src="./images/about/Xie-Dan.png" rounded={true} responsive={true} />
          </Col>
          <Col xs={12} md={4} className="vertical-center">
            <div>
              <p><strong>Dandan Xie</strong></p>
              <p>Alibaba Software Engineer</p>
              <p>Responsible for developing website</p>
            </div>
          </Col>
        </Row>
        <Title>List of International Teams</Title>
        <Row>
          <p>
            In the following we will list all teams who have explicitly confirmed their interest in
            recent days to participate in this project, in the sense that they use NBODY codes for
            their scientific projects, that they are contributing with scientific input to the code
            in their specific fields and that they highly appreciate the improvement of
            accessibility and usability of our software as it will be provided here.
          </p>
        </Row>
        <Row>
          <p>Morgan MacLeod, NASA Einstein Fellow, Institute for Advanced Study, morganmacleod@gmail.com</p>
          <p>Aaron Geller, Northwestern University CIERA & The Adler Planetarium, a-geller@northwestern.edu</p>
        </Row>
        <Title>contact us</Title>
        <p className="text-center">Email: webadmin-silkroad@nao.cas.cn</p>
      </Grid>
    );
  }
}
