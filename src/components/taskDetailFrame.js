/**
 * Created by Hank on 1/18/19.
 */

import React from 'react';
import '../css/task_tile.css'
import '../css/taskDetailFrame.css'
import {pick} from "lodash";

class TaskDetailFrame extends React.Component {

    render() {
        return <div key="{this.props.key}" className={'task-detail-frame ' + this.props.className} style={this.props.style}>
            {this.props.children}
            <div className="taskDetailTitle">
                <h4>{this.props.taskName}</h4>
            </div>
            <div className="taskTextContainer">
                <p>{this.props.taskText}</p>
            </div>
        </div>;
    }
}

export default TaskDetailFrame