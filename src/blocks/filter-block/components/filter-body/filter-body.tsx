import SelectComponent from '@/ui/select/select';
import { ToggleGroupComponent } from '@/ui/toggle-group/toggle-group';
import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/styles/globals.stylex';

import NumberRangeComponent from '@/ui/number-range/number-range';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/config/store';
import { filterChange } from '../../store/filter-slice';
import { FilterState, FilterTypes } from '../../types/filter-types';

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
                {filterState.map(({ type, name, values, currentValue }) => (
                    <FilterItem key={name} type={type} name={name} values={values} currentValue={currentValue} />
                ))}
            </menu>
        </div>
    );
};

const FilterItem = ({ type, name, values, currentValue }) => {
    const dispatch = useDispatch();
    const props = {
        values,
        currentValue,
        onValueChange: (value: FilterState['currentValue']) => dispatch(filterChange({ filterName: name, currentValue: value })),
    };

    return (
        <li {...stylex.props(styles.filter_item)}>
            <span {...stylex.props(styles.item_caption)}>{name}</span>
            {type === FilterTypes.select && <SelectComponent {...props} />}
            {type === FilterTypes.toggles && <ToggleGroupComponent {...props} />}
            {type === FilterTypes.numberRange && <NumberRangeComponent {...props} />}
        </li>
    );

    return null;
};
