/**
 * Created by Hank on 1/13/19.
 */
import React from 'react';
import '../css/col_head.css'
import '../css/gridLayout.css'
import {pick} from "lodash";

class ColHead extends React.Component {








    render() {
        const propsToPassToDragHandle = pick(this.props, ['onMouseDown', 'onMouseUp', 'onTouchStart', 'onTouchEnd']);
        return <div {...propsToPassToDragHandle} key="{this.props.key}" className={'col-head grid-component ' + this.props.className} style={this.props.style}>
            {this.props.children}
            <p className="header-text">{this.props.text}</p>
        </div>;
    }
}

export default ColHead