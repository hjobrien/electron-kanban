/**
 * Created by Hank on 1/13/19.
 */
import React from 'react';
import '../css/task_tile.css'

class Tile extends React.Component {
    render() {
        return (
            <div className={'task-title widget-number ' + this.props.className} style={this.props.style}><h1>{this.props.taskName}</h1></div>
        )
    }
}

export default Tile