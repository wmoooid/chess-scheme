import * as stylex from '@stylexjs/stylex';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { colors } from '@/app/globals.stylex';
import { ReactNode } from 'react';

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

    tabs_list: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },

    tabs_item: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',

        color: {
            default: colors.mainColor,
            ":is([data-state='on'])": colors.white,
        },
        backgroundColor: {
            default: colors.mutedColor,
            ":is([data-state='on'])": colors.accentColor,
        },
        pointerEvents: {
            default: 'all',
            ":is([data-state='on'])": 'none',
        },

        transitionProperty: 'background-color color',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        userSelect: 'none',
    },

    tabs_icon: {
        display: 'grid',
        placeItems: 'center',
    },

    tabs_text: {
        fontSize: '0.875rem',
        color: 'inherit',
    },
});

export type ToggleItemProps = {
    name: string;
    icon: ReactNode;
};

export function ToggleGroupComponent({ itemsList }: { itemsList: ToggleItemProps[] }) {
    return (
        <ToggleGroup.Root type='single' defaultValue={itemsList[0].name} asChild>
            <menu {...stylex.props(styles.tabs_list)}>
                {itemsList.map(({ name, icon }) => (
                    <ToggleGroupItem key={name} name={name} icon={icon} />
                ))}
            </menu>
        </ToggleGroup.Root>
    );
}

function ToggleGroupItem({ name, icon }: ToggleItemProps) {
    return (
        <ToggleGroup.Item value={name} asChild>
            <li {...stylex.props(styles.tabs_item)}>
                <span {...stylex.props(styles.tabs_icon)}>{icon}</span>
                <span {...stylex.props(styles.tabs_text)}>{name}</span>
            </li>
        </ToggleGroup.Item>
    );
}
