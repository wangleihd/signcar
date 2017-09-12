import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav_logo extends Component {
  render(){
    return (
        <div className="col-sm-3">
        <a href="/">
          <img src="/images/logo.png" height="50" style={{borderRadius: '20%'}}/>
          <span style={{textAlign: 'center'}}>&nbsp;&nbsp;凯龙驾校</span>
        </a>
        </div>
    )
  }

}
class Nav_nav extends Component {
  render(){
    return (
        <div className="col-sm-6">
Nav_nav
        </div>
    )
  }

}

class Nav_search extends Component {
  render(){
    return (
        <div className="col-sm-4">
456Nav_search
        </div>
    )
  }

}
class Nav_head extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <Nav_logo></Nav_logo>
          <Nav_nav></Nav_nav>
          <Nav_search></Nav_search>
        </div>
      </div>
    )
  }

}
ReactDOM.render(
  <Nav_head />,
  document.getElementById('Nav_head')
);


module.exports = Nav_head;
