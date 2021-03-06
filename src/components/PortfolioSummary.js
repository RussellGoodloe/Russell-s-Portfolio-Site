import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioSummary = () => {
    return (
        <div className="page-header">
        <div className="content-container">
            <div className="page-header__actions">
                <Link className="button"to="/create">Add Project</Link>
            </div>
        </div>
    </div>
    );
};

export default PortfolioSummary;