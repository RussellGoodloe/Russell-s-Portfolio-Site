import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { editProject, removeProject } from '../actions/projects';

export class EditProjectPage extends React.Component {
    onSubmit = (project) => {
        this.props.editProject(this.props.project.id, project);
        this.props.history.push('/portfolio');
    };
    onRemove = () => {
        this.props.removeProject({ id: this.props.project.id });
        this.props.history.push('/portfolio');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Project</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectForm
                        project={this.props.project}
                        onSubmit={this.onSubmit} />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editProject: (id, project) => dispatch(editProject(id, project)),
    removeProject: (data) => dispatch(removeProject(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);