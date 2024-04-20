import { generateFiltersList } from '../helpers/generate-data';
import { ApartmentProps } from './apartments-types';

export enum FilterType {
    select = 'select',
    toggles = 'toggles',
    range = 'range',
}

export enum FilterName {
    project = 'Project',
    bedrooms = 'Bedrooms',
    price = 'Price',
    area = 'Area',
}

export type FilterBaseProps<Type, ValuesList, CurrentValue> = {
    type: Type;
    name: FilterName;
    values: ValuesList;
    currentValue: CurrentValue;
    checkKey: keyof ApartmentProps;
};

type FilterSelectValue = string;
export type FilterSelectProps = FilterBaseProps<FilterType.select, FilterSelectValue[], FilterSelectValue>;

type FilterTogglesValue = string;
export type FilterTogglesProps = FilterBaseProps<FilterType.toggles, FilterTogglesValue[], FilterTogglesValue>;

type FilterRangeValue = [number, number];
export type FilterRangeProps = FilterBaseProps<FilterType.range, FilterRangeValue, FilterRangeValue>;

export type FiltersList = ReturnType<typeof generateFiltersList>;
export type FilterProps = FiltersList[number];
export type FilterValue = FilterProps['currentValue'];
