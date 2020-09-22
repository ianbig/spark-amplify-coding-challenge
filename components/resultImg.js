import React from 'react'
import styles from './resultImg.module.css'

class ResultImg extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const imdbID = event.target.parentNode.getAttribute('id');
        sessionStorage.setItem('imdbID', imdbID)
        //console.log(imdbID);
        window.location.href = '/movieDetail'; // standrd way to change page
    }
    /**
     * UNDO: Exception handle to no image
     * UNDO: CSS size of flex-item
     * UNDO: Action after click the flex-item
     */
    render() {
        const movies = this.props.result;
        //console.log(movies);
    const listItems = movies.map((movie) => <div key={movie.imdbID} id={movie.imdbID} className={styles.flex_item} onClick={this.handleClick}>
                                                <img src={movie.Poster} width="200" height="300" />
                                                <div>{movie.Title}</div>
                                            </div>);
        return <div className={styles.container}>
                <div className={styles.flex_container}>{listItems}</div>
            </div>;
    }
}

export default ResultImg;