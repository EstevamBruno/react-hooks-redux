import { createStore, Reducer } from 'redux';
import Action from '../domain/action';
import State from '../domain/state';

enum ActionEnum {
  ADD_COURSE = 'ADD_COURSE',
  REMOVE = 'REMOVE',
}

const INITIAL_STATE: State = {
  data: [],
};

function courses(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case ActionEnum.ADD_COURSE:
      return { ...state, data: [...state.data, action.title] };
    case ActionEnum.REMOVE:
      return {
        data: state.data.filter((act) => act !== action.title),
      };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
