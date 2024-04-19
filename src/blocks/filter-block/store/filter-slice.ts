import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterState, FilterTypes } from '../types/filter-types';

const initialState: FilterState[] = [
    {
        type: FilterTypes.select,
        name: 'Project',
        values: ['Stonehenge', 'Stonehenge 2', 'Stonehenge 3'],
        currentValue: 'Stonehenge',
    },
    {
        type: FilterTypes.toggles,
        name: 'Bedrooms',
        values: [{ name: 'S' }, { name: '1' }, { name: '2' }, { name: '3' }],
        currentValue: 'S',
    },
    {
        type: FilterTypes.numberRange,
        name: 'Price',
        values: [0, 1000],
        currentValue: [0, 1000],
    },
    {
        type: FilterTypes.numberRange,
        name: 'Area',
        values: [0, 1000],
        currentValue: [0, 1000],
    },
];

type FilterChangeActionData = {
    filterName: FilterState['name'];
    currentValue: FilterState['currentValue'];
};

export const filterListSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterChange: (state, action: PayloadAction<FilterChangeActionData>) => {
            const changedFilter = state.find((item) => item.name === action.payload.filterName);
            if (changedFilter) changedFilter.currentValue = action.payload.currentValue;
            return state;
        },
    },
});

export const { filterChange } = filterListSlice.actions;
export default filterListSlice.reducer;
