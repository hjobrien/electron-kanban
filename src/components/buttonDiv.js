/**
 * Created by Hank on 1/15/19.
 */
import React from 'react';
import '../css/buttonDiv.css'
import {pick} from "lodash";

class ButtonDiv extends React.Component {
    render() {
        return <div key="{this.props.key}" className={'button-div ' + this.props.className} style={this.props.style}>
            {this.props.children}
            <p className="header-text">{this.props.buttonText}</p>
        </div>;
    }
}

export default ButtonDiv