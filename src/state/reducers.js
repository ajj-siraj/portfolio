import * as Actions from './actions';

export const loadingState = (prevState = {loading: true}, action) => {
  switch(action.type){
    case Actions.FETCHING_DATA:
      return prevState;
    case Actions.FETCHING_DONE:
      return {...prevState, loading: false}
  }
}
