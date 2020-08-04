//import SendEmail from '../actions/sendEmail';
import React from 'react';

export default class InquireForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            senderName: '',
            senderEmail: '',
            subject: '',
            body: '',
            error: ''
        }
    }
    onSenderNameChange=(e) => {
        const senderName = e.target.value;
        this.setState(() => ({ senderName }));
    };
    onSenderEmailChange=(e) => {
        const senderEmail = e.target.value;
        this.setState(() => ({ senderEmail }));
    };
    onSubjectChange=(e) => {
        const subject = e.target.value;
        this.setState(() => ({ subject }));
    };
    onBodyChange=(e) => {
        const body = e.target.value;
        this.setState(() => ({ body }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.senderName || !this.state.senderEmail || !this.state.subject || !this.state.body) {
            this.setState(() => ({ error: "Please complete all fields to submit your inquiry"}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                senderName: this.state.senderName,
                senderEmail: this.state.senderEmail,
                subject: this.state.subject,
                body: this.state.body
            })
            //SendEmail(senderName, senderEmail, subjeect, body);
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="Your name"
                    autoFocus
                    className="text-input"
                    value={this.state.senderName}
                    onChange={this.onSenderNameChange}
                />
                <input 
                    type="text"
                    placeholder="Your email address"
                    className="text-input"
                    value={this.state.senderEmail}
                    onChange={this.onSenderEmailChange}
                />
                <input 
                    type="text"
                    placeholder="Subject"
                    className="text-input"
                    value={this.state.subject}
                    onChange={this.onSubjectChange}
                />
                <textarea
                    placeholder="Body"
                    className="textarea"
                    value={this.state.body}
                    onChange={this.onBodyChange}
                />
                <button className="button">Send</button>
            </form>
        );
    }
}