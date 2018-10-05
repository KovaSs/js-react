import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import logger from '../middlewares/logger';

const enhancer = applyMiddleware(randomId, api, logger)

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store