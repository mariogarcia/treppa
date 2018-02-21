import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskPage from './TaskPage';
import { FlashMessage } from './components/FlashMessage'
import { createTask, editTask, fetchTasks } from './actions'
import './App.css';

class App extends Component {

    componentDidMount () {
        this.props.dispatch(fetchTasks())
    }

    onCreateTask = ({title, description}) => {
        this.props.dispatch(createTask({title, description}));
    }

    onStatusChange = (id, status) => {
        this.props.dispatch(editTask(id, { status }));
    }

    render() {
        return (
            <div className="main-content">
                {this.props.error && <FlashMessage message={this.props.error} />}
                <TaskPage
                    tasks={this.props.tasks}
                    onCreateTask={this.onCreateTask}
                    onStatusChange={this.onStatusChange}
                    isLoading={this.props.isLoading} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        isLoading: state.isLoading,
        error: state.error
    }
};

export default connect(mapStateToProps)(App);
