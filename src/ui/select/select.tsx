import * as stylex from '@stylexjs/stylex';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { colors } from '@/app/styles/globals.stylex';

const styles = stylex.create({
    select_trigger: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',

        width: '100%',
        height: '100%',
        padding: '0.75rem',

        backgroundColor: colors.mainBackground,

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.mutedColor,
        borderRadius: '0.5rem',

        fontSize: '1rem',
        fontWeight: 500,
    },

    select_content: {
        margin: '-4px',
        padding: '4px',

        backgroundColor: colors.mainBackground,
        borderRadius: '0.65rem',
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.04)',
    },

    select_item: {
        display: 'flex',
        justifyContent: 'space-between',

        padding: '1rem',

        borderRadius: '0.5rem',
        outline: 'none',

        color: {
            default: colors.mainColor,
            ":is([data-state='checked'])": colors.white,
            ':is([data-highlighted])': colors.mainColor,
        },
        backgroundColor: {
            default: null,
            ":is([data-state='checked'])": colors.accentColor,
            ':is([data-highlighted])': colors.accentBackground,
        },
    },
});

export type SelectComponentList = string[];

const SelectComponent = ({ values }: { values: SelectComponentList }) => {
    return (
        <Select.Root defaultValue={values[0]}>
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
