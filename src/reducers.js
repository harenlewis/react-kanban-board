import { combineReducers } from 'redux';
import kanbanReducer from './kanban_board/reducers'

export default combineReducers({
    kanban: kanbanReducer
});