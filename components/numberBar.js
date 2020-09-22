import React from 'react'



class NumberBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.currentPage
        }
        this.goToPage = this.goToPage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.changePageNum = this.changePageNum.bind(this)

    }

    goToPage(num) {
        this.setState({
            currentPage: num
        });
        this.props.goToPage(num);
    }

    changePageNum(event) {
        console.log(event.target.value);
       this.setState({
           currentPage: event.target.value
       });
    }

    handleKeyUp(e, pageTotal) {
        let value = e.target.value;
        console.log("value: " + value)
        let event = e || window.event;
        let code = event.keyCode || event.which || event.charCode;
        if (code === 13) { //enter
            if (isNaN(value)) {
                alert('Please input number')
            } else if(value > pageTotal || value === null || value.trim() === '') { 
                alert('Please input valid page number')
            } else {
                window.location.hash = `#${value}`;
                this.goToPage(parseInt(value, 10)) //input valid number
            }
        }
    }

    /**
     * UNDO: < and > replace previous and next
     * UNDO: order check 1 and totalNum
     * Emergent Bug: Unable to type number
     */
    render() {
        let pageSize = 10;
        let pageTotal = Math.ceil(this.props.total / pageSize);
        return (
            <div>
                <a href="####" onClick={()=> this.goToPage(this.state.currentPage-1)}> pre </a>
                <span>
                <input type="text" onChange={this.changePageNum} onKeyUp={(event) => this.handleKeyUp(event, pageTotal)}/> / {pageTotal}
                </span>
                <a href="####" onClick={()=> this.goToPage(this.state.currentPage+1)}> next </a>
                <style jsx>{`
                    input {
                        width: 2vw;
                        height: 2vh;
                    }
                `}</style>
            </div>      
        )
    }
}

export default NumberBar;