import {
  INITIALIZE_TABS,
  REMOVE_TABS,
  SET_TAB,
} from './constants';


export const initializeTabs = (namespace, initialTab) => ({
  type: INITIALIZE_TABS,
  namespace,
  initialTab,
});

export const removeTabs = namespace => ({
  type: REMOVE_TABS,
  namespace,
});

export const setTab = (namespace, tab) => ({
  type: SET_TAB,
  tab,
});
