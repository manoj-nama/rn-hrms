import { applyMiddleware } from 'redux';
import thunk from './thunk.middleware';
import logger from './logger.middleware';

const middlewares = applyMiddleware(thunk, logger);

export default middlewares;
