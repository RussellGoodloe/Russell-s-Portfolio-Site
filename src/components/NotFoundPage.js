import React from 'react';
import { Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div className="content-container">
        <h1>
            404!
        </h1>
        <p>Page not found! ¯\_(ツ)_/¯</p>
        <Link to="/">Click here to return home!</Link>
    </div>
);

export default NotFoundPage;