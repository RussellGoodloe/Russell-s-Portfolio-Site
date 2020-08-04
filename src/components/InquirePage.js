import React from 'react';
import { connect } from 'react-redux';
import InquireForm from './InquireForm';
//import sendEmail from '../actions/sendEmail';

export class InquirePage extends React.Component {
    onSubmit = (senderName, senderEmail, subject, body) => {
        //sendEmail(senderName, senderEmail, subject, body);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Contact me</h1>
                    </div>
                </div>
                <div className="content-container">
                    <InquireForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

export default InquirePage;