import * as Actions from './actions';

export const reducer = (prevState = { targetElement: ''}, action) => {
  switch (action.type) {
    case Actions.TOGGLE_NAV_THEME:
      return { ...prevState, targetElement: action.payload };
    default:
      return prevState;
  }
};