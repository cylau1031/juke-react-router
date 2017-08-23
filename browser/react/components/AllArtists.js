import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {
  constructor() {
    super()
    this.state = {
      artists: []

    }
  }

  componentDidMount () {
    axios.get('/api/artists/')
      .then(res => res.data)
      .then(artists => {
        this.setState({ artists })
      });
  }

  render () {
    const artists = this.state.artists;

    return (
      <div className="artists">
        <h3>Artists</h3>

        <table className='table'>
          <tbody>
            {
              artists && artists.map(artist => (
                <tr key={artist.id} className="list-group-item">
                  <td><Link to={`/artists/${artist.id}`}>{ artist.name }</Link></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
