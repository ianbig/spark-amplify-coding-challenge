import React from 'react'
import styles from './movie.module.css'

class Movie extends React.Component {
    constructor(props) {
        super(props);
        // UNDO: eliminate redundant state
        this.state = {
            plot: "",
            poster: "",
            title: "",
            rating: "",
            votes: 0,
            genre: "",
            actors: "",
            director: "",
            runtime: ""
        }
    }

    _OnReady(response) {
        return response.json();
    }
    _Error() {
        alert("Error in fetching");
    }


    componentDidMount() {
        const imdbID = sessionStorage.getItem('imdbID');
        const APIkey = sessionStorage.getItem("APIkey"); // for maintainability
        let url = "http://www.omdbapi.com/?plot=full&apikey=" + APIkey + "&i=" + imdbID;
        fetch(url).
            then(this._OnReady).
            then((json) => {
                //console.log(json);
                this.setState({
                    plot: json['Plot'],
                    poster: json['Poster'],
                    title: json['Title'],
                    rating: json['imdbRating'],
                    votes: json['imdbVotes'],
                    genere: json['Genre'],
                    actors: json['Actors'],
                    director: json['Director'],
                    runtime: json['Runtime']
                })
            }).catch(this._Error)

    }
    render() {
        return (
        <div className={styles.container}>
            <div className={styles.flex_container}><img src={this.state.poster} height="600" width="600" /></div>
            <div className={styles.flex_container}>
                <div className={styles.flex_item}><h2>{this.state.title}</h2></div>
                <div className={styles.flex_item}>
                    <header>
                        <span>Rating: {this.state.rating}</span>
                        <span>IMDB Votes: {this.state.votes}</span>
                        <span>Genre: {this.state.genre}</span>
                        <span>Director: {this.state.director}</span>
                        <span>Actors: {this.state.actors}</span>
                        <span>Runtime: {this.state.runtime}</span>
                    </header>
                </div>
                <div className={styles.flex_item}><section>{this.state.plot}</section></div>
            </div>
            
        </div>
        )
    }
}

export default Movie;