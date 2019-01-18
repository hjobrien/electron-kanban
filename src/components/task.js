/**
 * Created by Hank on 1/13/19.
 */
import React from 'react';
import '../css/task_tile.css'
import '../css/gridLayout.css'
import {pick} from "lodash";

class Task extends React.Component {

    render() {
        const shortnedTaskText = this.props.taskText; //TODO: make this automatically crop to a certain number of characters
        return <div key="{this.props.key}" className={'task-tile grid-component ' + this.props.className} style={this.props.style}>
            {this.props.children}
            <div className="taskTitleContainer">
                <h4>{this.props.taskName}</h4>
            </div>
            <div className="taskTextContainer">
                <p>{shortnedTaskText}</p>
            </div>
        </div>;
    }
}

export default Task