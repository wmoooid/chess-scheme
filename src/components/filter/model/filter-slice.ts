import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterName, FilterValue, FiltersList } from './filter-types';
import { apartmentsList } from '../../../blocks/apartments-filter/model/apartments-slice';
import { generateFiltersList } from '../lib/generate-filter-list';

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
            const index = state.findIndex((item) => item.name === action.payload.filterName);

            if (index !== -1) {
                state[index].currentValue = action.payload.newValue;
            }
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
