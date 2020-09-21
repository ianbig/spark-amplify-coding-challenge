import React from 'react'
import styles from './resultImg.module.css'

class ResultImg extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
     * UNDO: Exception handle to no image
     * UNDO: CSS size of flex-item
     * UNDO: Action after click the flex-item
     */
    render() {
        const movies = this.props.result;
        //console.log(movies);
    const listItems = movies.map((movie) => <div key={movie.imdbID} className={styles.flex_item}>
                                                <img src={movie.Poster} width="200" height="300" />
                                                <div>{movie.Title}</div>
                                            </div>);
        return <div className={styles.container}>
                <div className={styles.flex_container}>{listItems}</div>
            </div>;
    }
}

export default ResultImg;