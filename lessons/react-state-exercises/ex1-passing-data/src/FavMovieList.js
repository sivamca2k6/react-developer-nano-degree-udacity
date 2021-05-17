// eslint-disable-next-line
import React, { Component } from 'react';

class FavMovieList extends Component{
  
    render(){
      const profiles = this.props.profiles;
      const users = this.props.users;
      const movies = this.props.movies;
      
      return(
      <ul>
          <h2>Favorite Movies</h2>

          {profiles.map(profile => {
            const userName = users[profile.userID].name;
            const favMovieName = movies[profile.favoriteMovieID].name;
      		return(
              <li key={profile.id}>
                <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
              </li>);
          })}
        </ul>)
    }
}

export default FavMovieList;