import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';
import Sidebar from './Sidebar';
import Player from './Player';
import NotFound from './NotFound';
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
          <Switch>
          <Route
              exact path = "/"
              component = {StatefulAlbums}>
            </Route>
            <Route
              exact path = "/albums"
              component = {StatefulAlbums}>
            </Route>
            <Route
              exact path="/albums/:albumId"
              component = {SingleAlbum}>
            </Route>
            <Route
              exact path="/artists/"
              component = {AllArtists}>
            </Route>
            <Route
              exact path="/artists/:artistId"
              component = {SingleArtist}>
            </Route>
            <Route
              component = {NotFound}>
          </Route>
          </Switch>
          </div>
        <Player />
      </div>
      </Router>
    );
  }
}
