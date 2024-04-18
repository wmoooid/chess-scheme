import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const createReduxStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
