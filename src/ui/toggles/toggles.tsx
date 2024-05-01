import * as stylex from '@stylexjs/stylex';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { styles } from './toggles.styles';

export type TogglesComponentList = TogglesComponentValue[];
export type TogglesComponentValue = string;

type TogglesComponentProps = {
    values: TogglesComponentList;
    currentValue: TogglesComponentValue;
    onValueChange: (arg1: TogglesComponentValue) => void;
} & typeof ToggleGroup.Root &
    typeof ToggleGroup.Item;

export const TogglesComponent = ({ values, currentValue, onValueChange }: TogglesComponentProps) => {
    if (!values) return;

    return (
        <ToggleGroup.Root type='single' value={currentValue} onValueChange={(newValue) => onValueChange(newValue)} asChild>
            <menu {...stylex.props(styles.toggle_list)}>
                {values.map((value) => (
                    <TogglesItem key={value} value={value} />
                ))}
            </menu>
        </ToggleGroup.Root>
    );
};

const TogglesItem = ({ value }: { value: TogglesComponentValue }) => {
    return (
        <ToggleGroup.Item value={value} asChild>
            <li {...stylex.props(styles.toggle_item)}>
                <span {...stylex.props(styles.toggle_text)}>{value}</span>
            </li>
        </ToggleGroup.Item>
    );
};
