import React from 'react'

class ResultBar extends React.Component {
    constructor(props) {
        super(props);
    }
    // UNDO: width of div tag --> all image on the same horizontal
    render() {
        return (
        <div className="">{this.props.number} of {this.props.type} "{this.props.title}" found in {this.props.year}</div>
        );
    }
}

export default ResultBar;