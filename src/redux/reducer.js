import {
  INITIALIZE_TABS,
  REMOVE_TABS,
  SET_TAB,
} from './constants';


export default function tabs(state = {}, action) {
  switch (action.type) {
    case INITIALIZE_TABS:
      return {
        ...state,
        [action.namespace]: action.initialTab,
      };
    case REMOVE_TABS:
      return Object.keys(state)
        .filter(namespace => namespace !== action.namespace)
        .reduce((prev, next) => ({
          ...prev,
          [next]: state[next],
        }), {});
    case SET_TAB:
      return {
        ...state,
        [action.namespace]: action.tab,
      };
    default:
      return state;
  }
}
