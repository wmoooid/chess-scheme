import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import filterReducer, { changeFilter } from '@/blocks/apartments-filter/store/filter-slice';
import apartmentsReducer, { applyFilter } from '@/blocks/apartments-filter/store/apartments-slice';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

startAppListening({
    actionCreator: changeFilter,
    effect: async (_, listenerApi) => {
        listenerApi.cancelActiveListeners();
        await listenerApi.delay(100);
        const filterState = listenerApi.getState().filter;
        listenerApi.dispatch(applyFilter(filterState));
    },
});

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        apartments: apartmentsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
