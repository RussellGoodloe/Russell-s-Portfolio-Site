import React from 'react';

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.project ? props.project.description : '',
            language: props.project ? props.project.language : '',
            note: props.project ? props.project.note : '',
            gitLink: props.project ? props.project.gitLink : '',
            error: ''
        };
    }

    onDescriptionChange =(e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onLanguageChange=(e) => {
        const language = e.target.value;
        this.setState(() => ({ language }));
    }
    onNoteChange=(e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onLinkChange=(e) => {
        const gitLink = e.target.value;
        this.setState(() => ({ gitLink }));
    };
    onSubmit=(e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.gitLink) {
            this.setState(() => ({ error: 'Please provide a description and github link'}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                langauge: this.state.language,
                note: this.state.note,
                gitLink: this.state.gitLink
            })
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input 
                type="text"
                placeholder="Description"
                autoFocus
                className="text-input"
                value={this.state.description}
                onChange={this.onDescriptionChange}
            />
                        <input 
                type="text"
                placeholder="Language(optional)"
                autoFocus
                className="text-input"
                value={this.state.language}
                onChange={this.onLanguageChange}
            />
                                <input 
                type="text"
                placeholder="Notes(optional)"
                autoFocus
                className="text-input"
                value={this.state.note}
                onChange={this.onNoteChange}
            />
                                <input 
                type="text"
                placeholder="GitHub Link"
                autoFocus
                className="text-input"
                value={this.state.gitLink}
                onChange={this.onLinkChange}
            />
            <div>
                <button className="button">Save project</button>
            </div>
        </form>
        )
    }
}