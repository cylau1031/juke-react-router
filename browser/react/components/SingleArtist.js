import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios'

export default class SingleArtist extends Component {
  constructor() {
    super()
    this.state= {
      selectedArtist: {},
      artistAlbums: []
    }
  }

  componentDidMount() {
    // axios.get(`/api/artists/${this.props.match.params.artistId}`)
    //   .then(res => res.data)
    //   .then(artist => this.setState({
    //     selectedArtist: artist
    //   }));
    axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
      .then(res => {
        console.log(res.data)
      })
      .then(artistAlbums => this.setState({
        artistAlbums: artistAlbums
    }));
  }

  render () {

    const artist = this.state.selectedArtist;

    return (
      <span>HI</span>
      // <div className="album">
      //   <div>
      //     <h3>{ album.name }</h3>
      //     <img src={ album.imageUrl } className="img-thumbnail" />
      //   </div>
      //   <Songs songs={album.songs} />
      // </div>
    );
  }
}
