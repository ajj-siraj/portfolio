import { createStore } from 'redux';
import {loadingState} from './reducers';

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(loadingState, preloadedState);
};