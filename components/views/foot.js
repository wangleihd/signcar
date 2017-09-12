import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class Foot extends Component {
  render(){
    return (
      <Grid>
    <Row>
    <Col xs={6} md={3}>
      <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button className="ui inverted violet button">Button</Button>&nbsp;
          <Button className="ui inverted orange button">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button className="ui inverted violet button">Button</Button>&nbsp;
          <Button className="ui inverted orange button">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button className="ui inverted violet button">Button</Button>&nbsp;
          <Button className="ui inverted orange button">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button className="ui inverted violet button">Button</Button>&nbsp;
          <Button className="ui inverted orange button">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
    )
  }

}

module.exports = Foot;
