import { ApartmentsList } from '../types/apartments-types';
import { FilterName, FilterRangeProps, FilterSelectProps, FilterTogglesProps, FilterType } from '../types/filter-types';
import { getRandomNumber } from './get-random-number';

export const projectList = ['Stonehenge'] as const;
export const statusList = ['free', 'free', 'booked', 'sold'] as const;
export const roomTypeList = ['St', '1BR', '2BR', '3BR'] as const;

export function generateApartmentsList(lines = 8, cells = 15, project = projectList[0]) {
    const result = Array(lines)
        .fill(0)
        .map(() => {
            return Array(cells)
                .fill(0)
                .map(() => {
                    const status = statusList[getRandomNumber(0, statusList.length)];
                    const roomsFactor = getRandomNumber(0, roomTypeList.length);
                    const rooms = roomTypeList[roomsFactor];
                    const price = getRandomNumber(100000 + 100000 * roomsFactor, 300000 + 100000 * roomsFactor);
                    const area = getRandomNumber(25 + 25 * roomsFactor, 50 + 50 * roomsFactor) + Number(Math.random().toFixed(2));

                    return {
                        status,
                        project,
                        rooms,
                        price,
                        area,
                        isFiltered: false,
                    };
                });
        });

    return result;
}

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
