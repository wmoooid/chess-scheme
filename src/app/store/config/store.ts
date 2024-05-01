import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import filterReducer, { changeFilter } from '@/components/filter/model/filter-slice';
import apartmentsReducer, { applyFilter } from '@/blocks/apartments-filter/model/apartments-slice';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

startAppListening({
    actionCreator: changeFilter,
    effect: async (_, listenerApi) => {
        listenerApi.cancelActiveListeners();
        await listenerApi.delay(50);
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
