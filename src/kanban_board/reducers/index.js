import * as KanbanActions from '../actions/';


const INITIAL_STATE = {
    toggelProjectModal: false,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case KanbanActions.TOGGLE_PROJECT_MODAL:
            return { ...state, toggelProjectModal: true }
        default:
            return state
    }
}