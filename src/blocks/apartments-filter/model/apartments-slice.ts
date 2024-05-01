import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { generateApartmentsList } from '../helpers/generate-apartments-list';
import { FiltersList } from '../../../components/filter/model/filter-types';

export const apartmentsList = generateApartmentsList();
const initialState = apartmentsList;

const checkString = (FilterValue: string, checkValue: string) => FilterValue !== checkValue;
const checkRange = (FilterValue: [number, number], checkValue: number) => checkValue < FilterValue[0] || checkValue > FilterValue[1];

export const apartmentsSlice = createSlice({
    name: 'apartmentsFilter',
    initialState,
    reducers: {
        applyFilter: (state, action: PayloadAction<FiltersList>) => {
            state.forEach((line) =>
                line.forEach((cell) => {
                    if (cell.status === 'sold') return;

                    const result: boolean[] = [];

                    action.payload.forEach(({ currentValue, checkKey }) => {
                        if (!currentValue) return;

                        if (typeof currentValue === 'string') result.push(checkString(currentValue, cell[checkKey] as string));
                        if (typeof currentValue === 'object') result.push(checkRange(currentValue, cell[checkKey] as number));
                    });

                    cell.isFiltered = result.some((a) => a);
                }),
            );

            return state;
        },
    },
});

export const { applyFilter } = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
