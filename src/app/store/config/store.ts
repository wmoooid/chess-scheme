import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export function createReduxStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
