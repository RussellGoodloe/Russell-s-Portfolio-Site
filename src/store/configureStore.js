import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/project'


export default () => {
    const store = createStore(
        combineReducers({ 
            projects: projectsReducer
        }));
    return store;
};
