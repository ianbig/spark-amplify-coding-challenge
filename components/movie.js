import React from 'react'
import styles from './movie.module.css'
import { trackPromise } from 'react-promise-tracker';


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

    addDefaultSrc(event) {
        event.target.src = "../error.jpg"
    }


    componentDidMount() {
        const imdbID = sessionStorage.getItem('imdbID');
        const APIkey = sessionStorage.getItem("APIkey"); // for maintainability
        let url = "http://www.omdbapi.com/?plot=full&apikey=" + APIkey + "&i=" + imdbID;
        trackPromise(
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
            }).catch(this._Error));

    }
    render() {
        return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.flex_container_img}><img className={styles.imgprop} src={this.state.poster} onError={this.addDefaultSrc} /></div>
                <div className={styles.flex_container_info}>
                    <div className={styles.flex_item_head}>{this.state.title}</div>
                    <div className={styles.flex_item_info}>
                        <span>Rating: {this.state.rating} </span>
                        <span>IMDB Votes: {this.state.votes} </span>
                        <span>Genre: {this.state.genre}</span>
                        <span>Director: {this.state.director}</span>
                        <span>Actors: {this.state.actors}</span>
                        <span>Runtime: {this.state.runtime}</span>
                    </div>
                </div>
            </div>
            <div className={styles.flex_item_plot}><section>{this.state.plot}</section></div>
        </div>
        )
    }
}

export default Movie;