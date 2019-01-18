/**
 * Created by Hank on 1/16/19.
 */

import React from 'react';

import '../css/lane.css'
import {pick} from "lodash";
import ColHead from './colHead';


class Lane extends React.Component {

    render() {
        return <div key="{this.props.key}" className={'lane grid-component' + this.props.className} style={this.props.style} id={this.props.id}>
            {/*<p className="header-text">{this.props.text}</p>*/}
            <ColHead text={this.props.text}/>
            {this.props.children}
        </div>;
    }
}

export default Lane