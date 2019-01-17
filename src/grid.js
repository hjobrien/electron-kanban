/**
 * Created by Hank on 1/13/19.
 */
import GridLayout from 'react-grid-layout';
import Tile from './components/tile';
import ButtonDiv from './components/buttonDiv';
import ColHead from './components/colHead';
import React from 'react';

class Grid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const maxColHeight = 10;
        var layout = [
            {i: 'addTaskBtn', x: 0, y: 0, w: 1, h: 1, static: true},
            {i: 'col1Head', x: 0, y: 1, w: 1, h: 1, static: true},
            {i: 'background', x: 0, y: 1, w: 1, h: maxColHeight, static: true},
            {i: 'col2Head', x: 1, y: 1, w: 1, h: 1, static: true},
            {i: 'col3Head', x: 2, y: 1, w: 1, h: 1, static: true},
            // {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            // {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            // {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <div>
                <div id="padding" className="layout"></div>
                <GridLayout id="tasks" className="layout" layout={layout} cols={3} rowHeight={30} width={900}>
                    <ButtonDiv key="addTaskBtn" button_text="add task"/>
                    <ColHead key="col1Head" text="col1"/>
                    <ColHead key="col2Head" text="col2"/>
                    <ColHead key="col3Head" text="col3"/>
                    {/*<Tile key="a" taskName="foo"/>*/}
                </GridLayout>

                <GridLayout id="lanes" className="layout" layout={layout} cols={3} rowHeight={30} width={900}>
                    {/*<ButtonDiv key="addTaskBtn" button_text="add task"/>*/}
                    {/*<ColHead key="col1Head" text="col1"/>*/}
                    {/*<ColHead key="col2Head" text="col2"/>*/}
                    {/*<ColHead key="col3Head" text="col3"/>*/}
                    <div className="task-column" key="background"></div>
                    {/*<Tile key="a" taskName="foo"/>*/}
                </GridLayout>
            </div>
        )
    }
}

export default Grid