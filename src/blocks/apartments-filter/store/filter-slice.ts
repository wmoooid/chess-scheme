import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { generateApartmentsList, generateFiltersList } from '../helpers/generate-data';
import { FilterName, FilterValue } from '../types/filter-types';
import { startTransition } from 'react';

const apartmentsList = generateApartmentsList();
const filtersList = generateFiltersList(apartmentsList);
const initialState = { filtersList, apartmentsList };

type FilterChangePayload = {
    filterName: FilterName;
    newValue: FilterValue;
};

const checkString = (FilterValue: string, checkValue: string) => FilterValue !== checkValue;
const checkRange = (FilterValue: [number, number], checkValue: number) => checkValue < FilterValue[0] || checkValue > FilterValue[1];

export const apartmentsFilterSlice = createSlice({
    name: 'apartmentsFilter',
    initialState,
    reducers: {
        filterChange: (state, action: PayloadAction<FilterChangePayload>) => {
            const changedFilter = state.filtersList.find((item) => item.name === action.payload.filterName);

            if (!changedFilter) return;
            changedFilter.currentValue = action.payload.newValue;

            state.apartmentsList.forEach((line) =>
                line.forEach((cell) => {
                    startTransition(() => {
                        if (cell.status === 'sold') return;

                        const result: boolean[] = [];

                        state.filtersList.forEach(({ currentValue, checkKey }) => {
                            if (!currentValue) return;

                            if (typeof currentValue === 'string') result.push(checkString(currentValue, cell[checkKey]));
                            if (typeof currentValue === 'object') result.push(checkRange(currentValue, cell[checkKey]));
                        });

                        cell.isFiltered = result.some((a) => a);
                    });
                }),
            );

            return state;
        },
    },
});

export const { filterChange } = apartmentsFilterSlice.actions;
export default apartmentsFilterSlice.reducer;
