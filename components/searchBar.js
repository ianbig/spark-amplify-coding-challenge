import styles from "./searchBar.module.css"


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Year: "",
            Type: "Movie"
        };
  
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
  
    }
  
    handleSubmit(event) {
        event.preventDefault();
        // Is this safe ?
        const APIkey = "f1cadec4";
        const title = this.state.Title;
        const year = this.state.Year;
        const type = this.state.Type;
        const url = 'http://www.omdbapi.com/?' + 'apikey=' + APIkey + '&' + 'type=' + type + '&' + 
        's=' + title;
        sessionStorage.setItem('url', url);
        sessionStorage.setItem("title", title);
        sessionStorage.setItem("year", year);
        sessionStorage.setItem("type", type);
        //console.log(url);
        window.location.href = "/resultPage";
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name === "title" ? "Title" : (target.name === "year" ? "Year": "Type");
        // ES6 sytax for update state: setState only update changed part
        this.setState({
            [name]: value
        });
    }
  
    render () {
        /** 
         * Benefit of adding label:
         *  * accessiblity for screen reader
         *  * increase hit rate for ppl who have difficultity in clicking small checkbox
         */
  
         return (
            <div className={styles.container}>
                 <form className={styles.flex_container} onSubmit={this.handleSubmit}>
                        <div className={styles.flex_item}>
                            <label htmlFor="title">Title: </label>
                            <input name="title" type="search" id="flex-items" value={this.state.Title} onChange={this.handleChange}></input>
                        </div>
                        <div className={styles.flex_item}>
                            <label htmlFor="year">Year: </label>
                            <input name="year" type="search" id="title" value={this.state.Year} onChange={this.handleChange}></input>
                        </div>
                        <div className={styles.flex_item}>
                            <label htmlFor="type">Type: </label>
                                <select name="type" type="search" value={this.state.Type} onChange={this.handleChange}>
                                    <option value="movie">Movie</option>
                                    <option value="series">Series</option>
                                    <option value="episode">Episode</option>
                                </select>
                        </div>
                        <div className={styles.flex_item}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>             
            </div>
               
            
         )
    }
  }
  export default SearchBar;