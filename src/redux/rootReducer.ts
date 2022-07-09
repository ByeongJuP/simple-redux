import { combineReducers } from 'redux';
import counterReducer from './count/counter';
import memoReducer from './memo/memo';

const rootReducer = combineReducers({ counterReducer, memoReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
