import * as stylex from '@stylexjs/stylex';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { colors } from '@/app/styles/globals.stylex';
import { ReactNode } from 'react';

const styles = stylex.create({
    toggle_list: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        width: '100%',
        height: '100%',
    },

    toggle_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',

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

    toggle_icon: {
        display: 'grid',
        placeItems: 'center',
    },

    toggle_text: {
        fontSize: 'inherit',
        color: 'inherit',
    },
});

export type ToggleGroupComponentList = ToggleGroupComponentValue[];
export type ToggleGroupComponentValue = { name: string; icon?: ReactNode };

type ToggleGroupComponentProps = {
    values: ToggleGroupComponentList;
    currentValue: ToggleGroupComponentValue['name'];
    onValueChange: (arg1: ToggleGroupComponentValue['name']) => void;
};

export const ToggleGroupComponent = ({ values, currentValue, onValueChange }: ToggleGroupComponentProps) => {
    if (!values) return;

    return (
        <ToggleGroup.Root type='single' value={currentValue} onValueChange={(newValue) => onValueChange(newValue)} asChild>
            <menu {...stylex.props(styles.toggle_list)}>
                {values.map(({ name, icon }) => (
                    <ToggleGroupItem key={name} name={name} icon={icon} />
                ))}
            </menu>
        </ToggleGroup.Root>
    );
};

const ToggleGroupItem = ({ name, icon }: ToggleGroupComponentValue) => {
    return (
        <ToggleGroup.Item value={name} asChild>
            <li {...stylex.props(styles.toggle_item)}>
                {icon && <span {...stylex.props(styles.toggle_icon)}>{icon}</span>}
                <span {...stylex.props(styles.toggle_text)}>{name}</span>
            </li>
        </ToggleGroup.Item>
    );
};
