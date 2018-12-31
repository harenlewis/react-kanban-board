import { combineReducers } from 'redux';
import commonReducer from './common/reducers/common'

export default combineReducers({
    common: commonReducer
});