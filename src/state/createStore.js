import { createStore } from 'redux';
import {reducer} from './reducers';

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState);
};