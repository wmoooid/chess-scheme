import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { styles } from './select.styles';
import stylex from '@stylexjs/stylex';

export type SelectComponentList = SelectComponentValue[];
export type SelectComponentValue = string;
type SelectComponentProps = {
    values: SelectComponentList;
    currentValue: SelectComponentValue;
    onValueChange: (arg1: SelectComponentValue) => void;
};

const SelectComponent = ({ values, currentValue, onValueChange }: SelectComponentProps) => {
    return (
        <Select.Root value={currentValue} onValueChange={(newValue) => onValueChange(newValue)}>
            <Select.Trigger {...stylex.props(styles.select_trigger)}>
                <Select.Value />
                <Select.Icon style={{ display: 'flex' }}>
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content {...stylex.props(styles.select_content)}>
                    <Select.ScrollUpButton>
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport>
                        {values.map((name) => (
                            <SelectItem key={name} name={name} />
                        ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton>
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                    <Select.Arrow />
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

const SelectItem = ({ name }: Readonly<{ name: string }>) => {
    return (
        <Select.Item value={name} {...stylex.props(styles.select_item)}>
            <Select.ItemText>{name}</Select.ItemText>
            <Select.ItemIndicator style={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
};

export default SelectComponent;
