import * as stylex from '@stylexjs/stylex';

type ColorValueHex = `#${string}`;
type ColorPallete = Readonly<{ [key: string]: ColorValueHex }>;

const DARK = '@media (prefers-color-scheme: dark)';

const pallete: ColorPallete = {
    blue: '#0068FA',
    red: '#EA2A2D',
    white: '#FFF',
    black: '#323233',
    grey30: '#42464D',
    grey50: '#79818C',
    grey85: '#D4D6D9',
    grey90: '#E6EAF0',
    grey95: '#F3F5F7',
};

export const colors = stylex.defineVars({
    red: pallete.red,
    white: pallete.white,
    grey50: pallete.grey50,

    accentColor: {
        default: pallete.blue,
        [DARK]: pallete.blue,
    },
    mainColor: {
        default: pallete.black,
        [DARK]: pallete.white,
    },
    mutedColor: {
        default: pallete.grey85,
        [DARK]: pallete.grey50,
    },
    accentBackground: {
        default: pallete.grey95,
        [DARK]: pallete.grey30,
    },
    mainBackground: {
        default: pallete.white,
        [DARK]: pallete.black,
    },
});

export const globals = stylex.create({
    container: {
        maxWidth: '1400px',
        marginInline: 'auto',
        paddingInline: '2rem',
    },
});
