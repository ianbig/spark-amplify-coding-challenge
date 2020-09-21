import React from 'react';
import ResultBar from './resultBar'
import ResultImg from './resultImg'
import NumberBar from './numberBar'


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfResult: 0,
            title: "",
            year: "",
            result: [],
            type:"",
            page: 1,
            pageSize: 10
        }
        this.handleNumClick = this.handleNumClick.bind(this);
        this.handleMovClick = this.handleMovClick.bind(this);
    }

    // UNDO: handle error response state
    // UNDO: handle 0 result
    _OnResponse(response) {
        return response.json();
    }
  

  
    _OnError() {
        alert("Error in fetching");
    }

    componentDidMount() {
        const url = sessionStorage.getItem("url");
        fetch(url).then(this._OnResponse).
        then(json => {
            // console.log(json);
            this.setState({
                "numberOfResult": json['totalResults'],
                "result": json["Search"],
                "title": sessionStorage.getItem("title"),
                "year": sessionStorage.getItem("year"),
                "type": sessionStorage.getItem("type")
            })
        }).
        catch(this._OnError);
        // use arrow function in setState to avoid this become undefined
        
    }

    handleNumClick() {}

    handleMovClick(num) {
        // console.log(this.state.page);
        let url = sessionStorage.getItem('url');
        url = url + "&page=" + num;

        fetch(url).then(this._OnResponse).
        then(json => {
            console.log(url);
            this.setState({
                "result": json["Search"],
                "page": num
            })
        }).
        catch(this._OnError);
        // use arrow function in setState to avoid this become undefined


    }
    // UNDO: movie year is not corresponding to specific
    render() {
        return (
            <div>
                <ResultBar number={this.state.numberOfResult}  type={this.state.type} title={this.state.title} year={this.state.year}/>
                <ResultImg result={this.state.result} />
                <NumberBar currentPage={this.state.page} total={this.state.numberOfResult} goToPage={(num)=> this.handleMovClick(num)}/>
            </div>
            
        )
    }

}

export default Result;