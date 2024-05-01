import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { generateFiltersList } from '../helpers/generate-data';
import { FilterName, FilterValue, FiltersList } from '../types/filter-types';
import { apartmentsList } from './apartments-slice';

// const initialState = generateFiltersList(store.getState().apartments);
const initialState = generateFiltersList(apartmentsList);

type changeFilterPayload = {
    filterName: FilterName;
    newValue: FilterValue;
};

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        changeFilter: (state: FiltersList, action: PayloadAction<changeFilterPayload>) => {
            const changedFilter = state.find((item) => item.name === action.payload.filterName);

            if (!changedFilter) return;
            changedFilter.currentValue = action.payload.newValue;

            return state;
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
