import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/styles/globals.stylex';

export const styles = stylex.create({
    section: {
        marginTop: '2rem',
    },

    chess_body: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },

    chess_line: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },

    chess_cell: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        gap: '0.5rem',

        flexShrink: 0,
        flexGrow: 1,
        flexBasis: 1,

        padding: '0.65rem',
        minWidth: '4rem',

        borderRadius: '0.375rem',
        color: 'white',
        userSelect: 'none',

        transition: 'background-color 200ms ease-out',

        opacity: {
            default: 1,
            ':hover': 0.8,
        },
    },

    chess_cell_free: {
        backgroundColor: colors.green,
    },

    chess_cell_booked: {
        backgroundColor: colors.yellow,
    },

    chess_cell_filtered: {
        backgroundColor: colors.mutedColor,
    },

    chess_cell_sold: {
        backgroundColor: colors.accentBackground,
    },

    cell_rooms: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: '90%',
        color: 'inherit',
    },

    cell_area: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '90%',
        color: 'inherit',
    },
});
