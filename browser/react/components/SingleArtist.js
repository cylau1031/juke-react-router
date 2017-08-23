import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
  constructor() {
    super()
    this.state= {
      selectedArtist: {},
      artistAlbums: []
    }
  }

  componentDidMount() {
    const artistInfo = axios.get(`/api/artists/${this.props.match.params.artistId}`);
    const artistAlbumInfo = axios.get(`/api/artists/${this.props.match.params.artistId}/albums`);

    Promise.all([artistInfo, artistAlbumInfo])
      .then(data => data.map(index => index.data))
      .then(res => {
        this.setState({
          selectedArtist: res[0],
          artistAlbums: res[1]
        })
      })
      .catch(console.error)
  }

  render () {

    const artist = this.state.selectedArtist;
    const albums = this.state.artistAlbums;
    let songs = [];
    albums.forEach(album => {
      songs = songs.concat(album.songs)
    })

    return (
      <div className="artist">
        <h2>{artist.name}</h2>

        <h4><Link to={`/artists/${artist.id}/albums`}>Albums</Link></h4>
        <h4><Link to={`/artists/${artist.id}/songs`}>Songs</Link></h4>

        <Route path="/artists/:artistId/albums" render={() => <AllAlbums albums={albums} />}></Route>
        <Route path="/artists/:artistId/songs" render={() => <Songs songs={songs} />}></Route>

      </div>
    );
  }
}
