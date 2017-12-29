import { combineReducers } from 'redux';
import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';

function characters(state = characters_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id );
            return characters;
        default:
          return state;
    }
}

function heros(state = [], action){
    switch(action.type) {
      case ADD_CHARACTER:
        let heros = [...state, createCharacter(action.id)];
        return heros;
      default:
        return state;
    }
}

function createCharacter(id) {
   let character = characters_json.find(c => c.id === id);
   return character;
}

const rootReducer = combineReducers({
    characters,
    heros
})

export default rootReducer;
