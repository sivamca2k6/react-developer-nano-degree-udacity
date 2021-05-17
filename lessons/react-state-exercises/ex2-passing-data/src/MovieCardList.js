// eslint-disable-next-line
import React, { Component } from 'react';

 class MovieCardList extends Component{

    render(){
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;
        
        //need to use object keys 
        const displayList = Object.keys(movies).map(id => {
            const profileFilter = profiles.filter( p => p.favoriteMovieID === id);
            
            return (<li key = {id}>
                <h2>{movies[id].name}</h2>
                <p>Liked By:</p>
                <ul>
                    { profileFilter.length > 0 ? profileFilter.map( x=> (<li>{users[x.id].name}</li>) ) : <li>no one favorited the movie</li> }
                    
                </ul>
            </li>);
        });

        return <ul> {displayList}</ul>;
      }


}

export default MovieCardList