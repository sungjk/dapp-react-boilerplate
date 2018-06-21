import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';

import config from 'src/config';
import rootReducer from './reducers';

function createMiddlewares({ isServer }) {
    let middlewares = [
        thunkMiddleware,
    ];
    
    if (config.env !== 'production' && typeof window !== 'undefined') {
        middlewares.push(createLogger({
            level: 'info',
            collapsed: true,
            stateTransformer: state => state,
        }));
    }
    
    return middlewares;
}

export const initStore = (initialState = {}, context) => {
    const { isServer } = context;
    const middlewares = createMiddlewares({ isServer });
    
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares)),
    );
};

export default (comp) => withRedux(initStore)(comp);
