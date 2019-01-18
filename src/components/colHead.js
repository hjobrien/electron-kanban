/**
 * Created by Hank on 1/13/19.
 */
import React from 'react';
import '../css/col_head.css'
import '../css/gridLayout.css'
import {pick} from "lodash";

class ColHead extends React.Component {

    render() {
        return <div key="{this.props.key}" className={'col-head ' + this.props.className} style={this.props.style}>
            {this.props.children}
            <h1 className="header-text">{this.props.text}</h1>
        </div>;
    }
}

export default ColHead