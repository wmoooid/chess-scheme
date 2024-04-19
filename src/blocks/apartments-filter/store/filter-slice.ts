import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { generateApartmentsList, generateFiltersList } from '../helpers/generate-data';
import { FilterName, FilterType, FilterValue } from '../types/filter-types';

const apartmentsList = generateApartmentsList();
const filtersList = generateFiltersList(apartmentsList);
const initialState = { filtersList, apartmentsList };

type FilterChangePayload = {
    filterName: FilterName;
    newValue: FilterValue;
};

export const apartmentsFilterSlice = createSlice({
    name: 'apartmentsFilter',
    initialState,
    reducers: {
        filterChange: (state, action: PayloadAction<FilterChangePayload>) => {
            const changedFilter = state.filtersList.find((item) => item.name === action.payload.filterName);

            if (!changedFilter) return;
            changedFilter.currentValue = action.payload.newValue;

            const value = changedFilter.currentValue;

            state.apartmentsList.forEach((line) =>
                line.forEach((cell) => {
                    if (cell.status === 'sold') return;

                    if (changedFilter.name === FilterName.Bedrooms) {
                        cell.isFiltered = !(cell.rooms === value || value === '');
                    }

                    if (changedFilter.type === FilterType.range)
                        if (changedFilter.name === FilterName.Price) {
                            cell.isFiltered = !(cell.price > (value![0] as number) && cell.price < (value![1] as number));
                        }

                    if (changedFilter.name === FilterName.Area) {
                        cell.isFiltered = !(cell.area > (value![0] as number) && cell.area < (value![1] as number));
                    }
                }),
            );

            return state;
        },
    },
});

export const { filterChange } = apartmentsFilterSlice.actions;
export default apartmentsFilterSlice.reducer;
