import { combineReducers } from 'redux';

import characters from './characters_reducer.js';
import heros from './heros_reducer.js'; 

function createCharacter(id) {
   let character = characters_json.find(c => c.id === id);
   return character;
}

const rootReducer = combineReducers({
    characters,
    heros
})

export default rootReducer;
