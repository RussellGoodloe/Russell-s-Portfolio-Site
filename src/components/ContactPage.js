import React from 'react';
import { Link } from 'react-router-dom';

const linkedIn=() => {
    return window.location.href = "https://www.linkedin.com/in/russell-goodloe-01866a1a3/";
};
const Instagram = () => {
    return window.location.href = "https://www.instagram.com/russellgoodloe11/"; 
};

const ContactPage = () => (
    

    <div className="welcome">
        <div className="content-container">
            <div className="welcome__content">
                <h3>Want to reach out? Follow any of these links to reach me on Social Media!</h3>            
                <button className="button__contact" onClick={linkedIn}>LinkedIn</button>
                <button className="button__contact" onClick={Instagram}>Instagram</button>
                <p>*I'm not a big social media user so there are only two links</p>
                <h3>Want to be more direct? Click below to send me a message.</h3>
                <Link to="/inquire"><button className="button__contact">Inquire</button></Link>
            </div>
        </div>
    </div>
);
export default ContactPage;