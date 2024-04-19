import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/styles/globals.stylex';

export const styles = stylex.create({
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

        userSelect: 'none',
    },
});
