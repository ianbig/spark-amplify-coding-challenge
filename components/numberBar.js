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
            if (isNaN(value)) { //isNaN() 不是一个数字返回true
                alert('Please input number')
            } else if(value > pageTotal || value === null || value.trim() === '') { //使用trim()去掉空格，全为空格的字符串不为''也不为null
                alert('Please input valid page number')
            } else {
                this.goToPage(parseInt(value, 10)) //输入了合法页码，调用跳转页面方法。
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
                    <input type="text" value={this.props.currentPage} onChange={this.changePageNum} onKeyUp={(event) => this.handleKeyUp(event, pageTotal)}/>/{pageTotal}
                </span>
                <a href="####" onClick={()=> this.goToPage(this.state.currentPage+1)}> next </a>
            </div>      
        )
    }
}

export default NumberBar;