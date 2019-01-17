/**
 * Created by Hank on 1/15/19.
 */
import React from 'react';
import '../css/buttonDiv.css'
import '../css/gridLayout.css'
import {pick} from "lodash";

class ButtonDiv extends React.Component {
    render() {
        const propsToPassToDragHandle = pick(this.props, ['onMouseDown', 'onMouseUp', 'onTouchStart', 'onTouchEnd']);
        return <div {...propsToPassToDragHandle} key="{this.props.key}" className={'button-div grid-component ' + this.props.className} style={this.props.style}>
            {this.props.children}
            <p className="header-text">{this.props.button_text}</p>
        </div>;
    }
}

export default ButtonDiv