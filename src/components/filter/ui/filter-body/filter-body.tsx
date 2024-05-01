import { RootState } from '@/app/store/config/store';
import { colors } from '@/app/styles/globals.stylex';
import { changeFilter } from '@/blocks/apartments-filter/store/filter-slice';
import { FilterProps, FilterType, FilterValue } from '@/blocks/apartments-filter/types/filter-types';
import { RangeComponent } from '@/ui/range/range';
import { SelectComponent } from '@/ui/select/select';
import { TogglesComponent } from '@/ui/toggles/toggles';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const styles = stylex.create({
    wrapper: {},
    filter_list: {
        display: 'flex',
        alignItems: 'stretch',
        gap: '2rem',
    },

    filter_item: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flexGrow: 1,
        flexBasis: '100%',
    },

    item_caption: {
        fontSize: '0.75rem',
        color: colors.grey50,
    },
});

export const FilterBody = () => {
    const filterState = useSelector((state: RootState) => state.filter);
    return (
        <div {...stylex.props(styles.wrapper)}>
            <menu {...stylex.props(styles.filter_list)}>
                {filterState.map((props) => (
                    <FilterItem key={props.name} {...props} />
                ))}
            </menu>
        </div>
    );
};

const FilterItem: FC<FilterProps> = React.memo(({ type, name, values, currentValue }) => {
    const dispatch = useDispatch();
    const onValueChange = (value: FilterValue) => dispatch(changeFilter({ filterName: name, newValue: value }));

    return (
        <li {...stylex.props(styles.filter_item)}>
            <span {...stylex.props(styles.item_caption)}>{name}</span>
            {type === FilterType.select && <SelectComponent values={values} currentValue={currentValue} onValueChange={onValueChange} />}
            {type === FilterType.toggles && <TogglesComponent values={values} currentValue={currentValue} onValueChange={onValueChange} />}
            {type === FilterType.range && <RangeComponent values={values} currentValue={currentValue} onValueChange={onValueChange} />}
        </li>
    );
});
