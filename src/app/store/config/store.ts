import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import filterReducer from '@/components/filter/model/filter-slice';
import apartmentsReducer from '@/blocks/apartments-filter/model/apartments-slice';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        apartments: apartmentsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
