import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <Router>
          <div className="col-xs-10">
            <Route
              exact path = "/albums"
              component = {AllAlbums}>
            </Route>
            <Route
              exact path = "/"
              component = {AllAlbums}>
            </Route>
            <Route
              path="/albums/:albumId"
              component = {SingleAlbum}>
            </Route>
            {//  this.state.selectedAlbum.id ?
            //  <SingleAlbum album={this.state.selectedAlbum} /> :
            //  <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
          }

          </div>
        </Router>
        <Player />
      </div>
    );
  }
}
