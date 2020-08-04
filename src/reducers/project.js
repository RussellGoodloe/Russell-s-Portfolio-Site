const defaultProjects = [
    {
        id: 1,
        description: "Dungeon Crawler Game",
        langauge: 'C#',
        note: 'please work',
        gitLink: 'testurl.com'
    },
    {
        id: 2,
        description: "Portfolio Site",
        langauge: 'Javascript, React',
        note: '',
        gitLink: 'testurl.com' 
    }
];
const projectsReducer = (state = defaultProjects, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                action.project
            ];
        case 'REMOVE_PROJECT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PROJECT':
            return state.map((project) => {
                if (project.id === action.id) {
                    return {
                        ...project,
                        ...action.updates
                    };
                }else {
                    return projectsReducer;
                }
            });
        default:
            return state;
    }
};
export default projectsReducer;

