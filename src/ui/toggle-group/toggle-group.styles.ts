import { colors } from '@/app/styles/globals.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
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
