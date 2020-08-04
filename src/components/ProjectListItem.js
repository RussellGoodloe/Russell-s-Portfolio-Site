import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ProjectListItem = ({ id, description, language, createdAt, gitLink}) => (
    <Link className="list-item" to={gitLink}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{language}</h3>
    </Link>
);

export default ProjectListItem;