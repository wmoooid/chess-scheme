import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { generateApartmentsList } from '../lib/generate-apartments-list';
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

                    cell.isFiltered = action.payload.some(({ currentValue, checkKey }) => {
                        if (!currentValue) return false;

                        if (typeof currentValue === 'string') {
                            return checkString(currentValue, cell[checkKey] as string);
                        }

                        if (typeof currentValue === 'object') {
                            return checkRange(currentValue, cell[checkKey] as number);
                        }

                        return false;
                    });
                }),
            );
            return state;
        },
    },
});

export const { applyFilter } = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
