import uuid from 'uuid';

export const addProject = (
    {
        description = '',
        language = '',
        note = '',
        gitLink = ''
    } = {}
) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        description,
        language,
        note,
        gitLink
    }
});

export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id, updates
});