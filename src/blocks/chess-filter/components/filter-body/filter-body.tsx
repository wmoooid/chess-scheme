import SelectComponent, { SelectComponentList } from '@/ui/select/select';
import { colors } from '@/app/globals.stylex';
import { ToggleGroupComponent, ToggleGroupComponentList } from '@/ui/toggle-group/toggle-group';
import { Prettify } from 'types/utils';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    wrapper: {},
    filter_list: {
        display: 'flex',
        alignItems: 'stretch',
        gap: '1rem',
    },

    filter_item: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flexGrow: '1',
        flexBasis: '100%',
    },

    item_caption: {
        fontSize: '0.75rem',
        color: colors.grey50,
    },
});

type FilterItemSelect = { type: 'select'; name: string; values: SelectComponentList };
type FilterItemToggles = { type: 'toggles'; name: string; values: ToggleGroupComponentList };
type FilterItemProps = Prettify<FilterItemSelect | FilterItemToggles>;

const FILTERS_LIST: FilterItemProps[] = [
    { type: 'select', name: 'Project', values: ['Stonehenge', 'Stonehenge 2', 'Stonehenge 3'] },
    { type: 'toggles', name: 'Bedrooms', values: [{ name: 'S' }, { name: '1' }, { name: '2' }, { name: '3' }] },
];

export function FilterBody() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <menu {...stylex.props(styles.filter_list)}>
                {FILTERS_LIST.map(({ type, name, values }) => (
                    // @ts-expect-error: strange things happens
                    <FilterItem type={type} name={name} values={values} />
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

    return null;
}
