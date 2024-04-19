import { SelectComponentList, SelectComponentValue } from '@/ui/select/select';
import { ToggleGroupComponentList, ToggleGroupComponentValue } from '@/ui/toggle-group/toggle-group';
import { NumberRangeComponentValue } from '@/ui/number-range/number-range';
import { Prettify } from 'types/utils';

export enum FilterTypes {
    'select',
    'toggles',
    'numberRange',
}

type FilterComponentBaseState<Type, List, Item> = {
    type: Type;
    name: string;
    values: List;
    currentValue: Item;
};

export type FilterSelectState = FilterComponentBaseState<FilterTypes.select, SelectComponentList, SelectComponentValue>;
export type FilterToggleGroupState = FilterComponentBaseState<FilterTypes.toggles, ToggleGroupComponentList, ToggleGroupComponentValue['name']>;
export type FilterNumberRangeState = FilterComponentBaseState<FilterTypes.numberRange, NumberRangeComponentValue, NumberRangeComponentValue>;

export type FilterState = Prettify<FilterSelectState | FilterToggleGroupState | FilterNumberRangeState>;
export type FilterList = SelectComponentList | ToggleGroupComponentList | NumberRangeComponentValue;
export type FilterValue = SelectComponentValue | ToggleGroupComponentValue['name'] | NumberRangeComponentValue;
