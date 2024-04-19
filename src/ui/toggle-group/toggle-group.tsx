import * as stylex from '@stylexjs/stylex';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ReactNode } from 'react';
import { styles } from './toggle-group.styles';

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
