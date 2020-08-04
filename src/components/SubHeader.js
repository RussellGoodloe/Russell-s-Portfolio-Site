import React from 'react';
import { Link } from 'react-router-dom';

export default class SubHeader extends React.Component {
    render() {
        return (
            <div className="subheader__content">
                <Link className="subheader__title" to="/portfolio">
                    <h3>Portfolio</h3>
                </Link>
                <Link className="subheader__title" to="/personal" >
                    <h3>Personal</h3>
                </Link>
                <Link className="subheader__title" to="/contact">
                    <h3>Contact</h3>
                </Link>
            </div>
        )
    }
}