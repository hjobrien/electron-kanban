/**
 * Created by Hank on 1/13/19.
 */
import GridLayout from 'react-grid-layout';
import Tile from './tile';
import ColHead from './colHead';
import React from 'react';

class Grid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            {i: 'col1Head', x: 0, y: 0, w: 1, h: 1, static: true},
            {i: 'col2Head', x: 1, y: 0, w: 1, h: 1, static: true},
            {i: 'col3Head', x: 2, y: 0, w: 1, h: 1, static: true},
            {i: 'div', x: 2, y: 0, w: 1, h: 1, static: false}
            // {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            // {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            // {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={3} rowHeight={30} width={900}>
                <ColHead key="col1Head" text="col1"/>
                <ColHead key="col2Head" text="col2"/>
                <ColHead key="col3Head" text="col3"/>q
                {/*<Tile key="a" taskName="foo"/>*/}
            </GridLayout>
        )
    }
}

export default Grid