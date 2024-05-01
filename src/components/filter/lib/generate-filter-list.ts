import { ApartmentsList } from '@/blocks/apartments-filter/model/apartments-types';
import { FilterName, FilterRangeProps, FilterSelectProps, FilterTogglesProps, FilterType } from '../model/filter-types';

export const projectList = ['Stonehenge'] as const;
export const statusList = ['free', 'free', 'booked', 'sold'] as const;
export const roomTypeList = ['St', '1BR', '2BR', '3BR'] as const;

export function generateFiltersList(apartmentsList: ApartmentsList) {
    const projectFilter: FilterSelectProps = {
        type: FilterType.select,
        name: FilterName.project,
        values: [...projectList],
        currentValue: projectList[0],
        checkKey: 'project',
    };

    const bedroomsFilter: FilterTogglesProps = {
        type: FilterType.toggles,
        name: FilterName.bedrooms,
        values: [...roomTypeList],
        currentValue: '',
        checkKey: 'rooms',
    };

    const priceFilter: FilterRangeProps = {
        type: FilterType.range,
        name: FilterName.price,
        //@ts-expect-error временный null
        values: null,
        //@ts-expect-error временный null
        currentValue: null,
        checkKey: 'price',
    };

    const areaFilter: FilterRangeProps = {
        type: FilterType.range,
        name: FilterName.area,
        //@ts-expect-error временный null
        values: null,
        //@ts-expect-error временный null
        currentValue: null,
        checkKey: 'area',
    };

    for (const line of apartmentsList) {
        for (const cell of line) {
            if (!areaFilter.values) areaFilter.values = [cell.area, cell.area];
            if (!priceFilter.values) priceFilter.values = [cell.price, cell.price];

            if (cell.area < areaFilter.values[0]) areaFilter.values[0] = cell.area;
            if (cell.area > areaFilter.values[1]) areaFilter.values[1] = cell.area;
            if (cell.price < priceFilter.values[0]) priceFilter.values[0] = cell.price;
            if (cell.price > priceFilter.values[1]) priceFilter.values[1] = cell.price;
        }
    }

    priceFilter.currentValue = priceFilter.values;
    areaFilter.currentValue = areaFilter.values;

    return [projectFilter, bedroomsFilter, priceFilter, areaFilter];
}
