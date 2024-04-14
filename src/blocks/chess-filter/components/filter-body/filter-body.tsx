import SelectComponent from '@/ui/select/select';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    wrapper: {},
    filter_list: {},
    filter_item: {},
});

type FilterType = 'select';
type FilterItemProps = Readonly<{ type: FilterType; values: string[] }>;

const FILTERS_LIST: FilterItemProps[] = [{ type: 'select', values: ['Stonehenge', 'Stonehenge 5', 'Stonehenge 2'] }];

export function FilterBody() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <menu {...stylex.props(styles.filter_list)}>
                {FILTERS_LIST.map(({ type, values }) => (
                    <FilterItem type={type} values={values} />
                ))}
            </menu>
        </div>
    );
}

function FilterItem({ type, values }: FilterItemProps) {
    if (type === 'select')
        return (
            <li {...stylex.props(styles.filter_item)}>
                <SelectComponent values={values} />
            </li>
        );

    return null;
}
