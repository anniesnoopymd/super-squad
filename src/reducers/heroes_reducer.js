import { ADD_CHARACTER } from '../actions';

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

export default heros;
