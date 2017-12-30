import { combineReducers } from 'redux';

import characters from './characters_reducer.js';
import heros from './heroes_reducer.js';

const rootReducer = combineReducers({
    characters,
    heros
})

export default rootReducer;
