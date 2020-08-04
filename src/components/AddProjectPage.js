import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { addProject } from '../actions/projects';

export class AddProjectPage extends React.Component {
    onSubmit = (project) => {
        this.props.addProject(project);
        this.props.history.push('/portfolio');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Project</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProject: (project) => dispatch(addProject(project))
});

export default connect (undefined, mapDispatchToProps)(AddProjectPage);