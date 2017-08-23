import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
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
      <Router>
      <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Route
              exact path = "/"
              component = {AllAlbums}>
            </Route>
            <Route
              exact path = "/albums"
              component = {AllAlbums}>
            </Route>
            <Route
              path="/albums/:albumId"
              component = {SingleAlbum}>
            </Route>
            <Route
              exact path="/artists/"
              component = {AllArtists}>
            </Route>
            <Route
              path="/artists/:artistId"
              component = {SingleArtist}>
            </Route>
      </div>
        <Player />
      </div>
      </Router>
    );
  }
}
