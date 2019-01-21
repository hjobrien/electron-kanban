import React, { Component } from 'react';
import './css/App.css';
import './css/lane.css';
import Lane from './components/lane';
import Task from './components/task';
import SideMenu from './components/side_menu';
import ButtonDiv from './components/buttonDiv';
import TaskDetailFrame from './components/taskDetailFrame';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SideMenu>
              <ButtonDiv buttonText="New Task"/>
          </SideMenu>
          <Lane text="To Do" id="left-most-lane">
              <Task taskName="foo" taskText="some details"/>
          </Lane>
          <Lane text="In Progress">

          </Lane>
          <Lane text="Done">

          </Lane>
          <TaskDetailFrame taskName="foo" taskText="a really long description"/>
      </div>
    );
  }
}

export default App;
