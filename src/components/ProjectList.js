import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import projectsReducer from '../reducers/project';
import selectProjects from '../selectors/project';

const ProjectList = (props) => (
    <div>
        <div className="list-header">
            <div className="show-for-mobile">Projects</div>
            <div className="show-for-desktop">Project</div>
            <div className="show-for-desktop">Date</div>
        </div>
        <div className="list-body">
        {
            props.projects.length === 0 ? (
                <div className="list-item__message">
                    <span>No projects</span>
                </div>
            ) : (
                props.projects.map((project) => {
                    return <ProjectListItem key={project.id} {...projects} />
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: projectsReducer
        //projects: selectProjects(state.projects)
    };
};
//export default ProjectList;
export default connect(mapStateToProps)(ProjectList);