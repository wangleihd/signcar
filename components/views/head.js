import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Head extends Component {
  render(){
    return (
      <div>
        <div class="ui top attached button blue" tabindex="0">Top</div>
        <h1>Hello {this.props.name}</h1>

      </div>
    )
  }

}

module.exports = Head;
