import * as stylex from '@stylexjs/stylex';
import { Cross2Icon } from '@radix-ui/react-icons';
import { colors } from '@/app/styles/globals.stylex';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        color: colors.grey50,
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem',
        cursor: 'pointer',
    },
});

export function FilterFooter() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <button {...stylex.props(styles.button)}>
                <Cross2Icon />
                Reset filter
            </button>
        </div>
    );
}
