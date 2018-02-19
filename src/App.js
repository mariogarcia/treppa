import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskPage from './TaskPage';
import { createTask, changeTaskStatus } from './actions'
import './App.css';

class App extends Component {
    onCreateTask = ({title, description}) => {
        this.props.dispatch(createTask({title, description}));
    }

    onStatusChange = (id, status) => {
        this.props.dispatch(changeTaskStatus(id, { status }));
    }

    render() {
        return (
            <div className="main-content">
                <TaskPage
                    tasks={this.props.tasks}
                    onCreateTask={this.onCreateTask}
                    onStatusChange={this.onStatusChange}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

export default connect(mapStateToProps)(App);
