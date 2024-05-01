import { startAppListening } from '@/app/store/config/store';
import { changeFilter } from '@/components/filter/model/filter-slice';
import { applyFilter } from './apartments-slice';

startAppListening({
    actionCreator: changeFilter,
    effect: async (_, listenerApi) => {
        listenerApi.cancelActiveListeners();
        await listenerApi.delay(100);
        const filterState = listenerApi.getState().filter;
        listenerApi.dispatch(applyFilter(filterState));
    },
});
