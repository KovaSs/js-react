import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware} from 'react-router-redux';
import history from '../history';
import reducer from '../reducer';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import logger from '../middlewares/logger';

const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const enhancer = devToolsCompose(applyMiddleware(thunk, routerMiddleware(history), randomId, api, logger))

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store