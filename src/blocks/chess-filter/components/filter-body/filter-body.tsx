import SelectComponent, { SelectComponentList } from '@/ui/select/select';
import { ToggleGroupComponent, ToggleGroupComponentList } from '@/ui/toggle-group/toggle-group';
import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/globals.stylex';
import { Prettify } from 'types/utils';
import NumberRangeComponent from '@/ui/number-range/number-range';

const styles = stylex.create({
    wrapper: {},
    filter_list: {
        display: 'flex',
        alignItems: 'stretch',
        gap: '1.5rem',
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

type FilterItemSelect = { type: 'select'; name: string; values: SelectComponentList };
type FilterItemToggles = { type: 'toggles'; name: string; values: ToggleGroupComponentList };
type FilterItemNumberRange = { type: 'number-range'; name: string; values: '' };
type FilterItemProps = Prettify<FilterItemSelect | FilterItemToggles | FilterItemNumberRange>;

const FILTERS_LIST: FilterItemProps[] = [
    { type: 'select', name: 'Project', values: ['Stonehenge', 'Stonehenge 2', 'Stonehenge 3'] },
    { type: 'toggles', name: 'Bedrooms', values: [{ name: 'S' }, { name: '1' }, { name: '2' }, { name: '3' }] },
    { type: 'number-range', name: 'Price', values: '' },
    { type: 'number-range', name: 'Area', values: '' },
];

export function FilterBody() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <menu {...stylex.props(styles.filter_list)}>
                {FILTERS_LIST.map(({ type, name, values }) => (
                    // @ts-expect-error: strange things happens
                    <FilterItem key={name} type={type} name={name} values={values} />
                ))}
            </menu>
        </div>
    );
}

function FilterItem({ type, name, values }: FilterItemProps) {
    if (type === 'select') {
        return (
            <li {...stylex.props(styles.filter_item)}>
                <span {...stylex.props(styles.item_caption)}>{name} </span>
                <SelectComponent values={values} />
            </li>
        );
    }

    if (type === 'toggles') {
        return (
            <li {...stylex.props(styles.filter_item)}>
                <span {...stylex.props(styles.item_caption)}>{name} </span>
                <ToggleGroupComponent itemsList={values} />
            </li>
        );
    }

    if (type === 'number-range') {
        return (
            <li {...stylex.props(styles.filter_item)}>
                <span {...stylex.props(styles.item_caption)}>{name} </span>
                <NumberRangeComponent />
            </li>
        );
    }

    return null;
}
