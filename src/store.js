import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReduces from './reducers/index';

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      let returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
  
// Store
const store = createStore(
    rootReduces,
    compose(applyMiddleware(thunkMiddleware)),
    applyMiddleware(logger)
);

export default store;

