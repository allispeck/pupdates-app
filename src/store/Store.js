import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "reducers/RootReducer";

const configStore = ()=>{
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
    return createStore(rootReducer, {}, composeEnhancers);
};

export const store = configStore();