import * as stylex from '@stylexjs/stylex';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { colors } from '@/app/globals.stylex';
import { ReactNode } from 'react';

const styles = stylex.create({
    tabs_list: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        width: '100%',
        height: '100%',
    },

    tabs_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',

        width: '100%',
        height: '100%',

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
        fontWeight: {
            default: 400,
            ":is([data-state='on'])": 500,
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
        fontSize: 'inherit',
        color: 'inherit',
    },
});

export type ToggleGroupItemProps = { name: string; icon?: ReactNode };
export type ToggleGroupComponentList = ToggleGroupItemProps[];

export function ToggleGroupComponent({ itemsList }: { itemsList: ToggleGroupComponentList }) {
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

function ToggleGroupItem({ name, icon }: ToggleGroupItemProps) {
    return (
        <ToggleGroup.Item value={name} asChild>
            <li {...stylex.props(styles.tabs_item)}>
                {icon && <span {...stylex.props(styles.tabs_icon)}>{icon}</span>}
                <span {...stylex.props(styles.tabs_text)}>{name}</span>
            </li>
        </ToggleGroup.Item>
    );
}
