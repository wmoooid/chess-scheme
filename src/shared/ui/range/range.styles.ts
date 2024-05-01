import stylex from '@stylexjs/stylex';
import { colors } from '@/app/styles/globals.stylex';

export const styles = stylex.create({
    wrapper: {
        position: 'relative',

        width: '100%',
        height: '100%',

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.mutedColor,
        borderRadius: '0.5rem',

        backgroundColor: colors.mainBackground,
    },

    input_number_group: {
        display: 'flex',

        width: '100%',
        height: '100%',
    },

    divider: {
        minWidth: 1,
        minHeight: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.mutedColor,
        margin: '0.5rem',
    },

    input_number: {
        width: '100%',
        height: '100%',

        font: 'inherit',
        fontSize: '1rem',

        borderWidth: 0,
        background: 'none',

        padding: '0.75rem 1rem',
    },

    slider_root: {
        position: 'absolute',
        bottom: '-0.4rem',
        left: '0.4rem',
        right: '0.4rem',

        display: 'flex',
        alignItems: 'center',

        width: 'unset !important',
        height: '0.8rem',

        userSelect: 'none',
        touchAction: 'none',
    },

    slider_track: {
        position: 'relative',
        flexGrow: 1,
        borderRadius: 999,
        height: 2,
    },

    slider_range: {
        position: 'absolute',
        backgroundColor: colors.accentColor,
        borderRadius: 999,
        height: '100%',
    },

    slider_thumb: {
        display: 'block',
        width: '0.875rem',
        height: '0.875rem',
        backgroundColor: colors.accentColor,
        borderRadius: 999,
    },
});
