import * as stylex from '@stylexjs/stylex';
import { ViewGridIcon, ViewHorizontalIcon } from '@radix-ui/react-icons';
import { ToggleGroupComponent, ToggleGroupItemProps } from '@/ui/toggle-group/toggle-group';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    heading: {
        fontSize: '1.75rem',
        fontWeight: 500,
        letterSpacing: '-0.03rem',
    },

    tabs_wrapper: {
        maxWidth: '14rem',
        fontSize: '0.75rem',
    },
});

const TABS_LIST: ToggleGroupItemProps[] = [
    { name: 'Scheme', icon: <ViewGridIcon /> },
    { name: 'List', icon: <ViewHorizontalIcon /> },
];

export const FilterHeader = () => {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <h1 {...stylex.props(styles.heading)}>Find an apartment</h1>
            <div {...stylex.props(styles.tabs_wrapper)}>
                <ToggleGroupComponent itemsList={TABS_LIST} />
            </div>
        </div>
    );
};
