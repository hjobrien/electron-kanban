/**
 * Created by Hank on 1/18/19.
 */
import React from 'react';

import '../css/side_menu.css'
import {pick} from "lodash";


class SideMenu extends React.Component {

    render() {
        return <div key="{this.props.key}" className={'side_menu ' + this.props.className} style={this.props.style} id={this.props.id}>
            {/*<p className="header-text">{this.props.text}</p>*/}
            {this.props.children}
        </div>;
    }
}

export default SideMenu