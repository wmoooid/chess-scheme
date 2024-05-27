import { colors } from '@/app/styles/globals.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    bullet: {
        width: '0.75rem',
        height: '0.75rem',
        borderRadius: '999px',
    },
    bullet_free: {
        backgroundColor: colors.green,
    },
    bullet_booked: {
        backgroundColor: colors.yellow,
    },
    bullet_sold: {
        backgroundColor: colors.mutedColor,
    },
    text: {
        fontSize: '0.75rem',
    },
});

type StatusToastProps = {
    type: 'free' | 'booked' | 'sold';
};

export const StatusToast: React.FC<StatusToastProps> = ({ type }) => {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.bullet, styles[`bullet_${type}`])}></div>
            <span {...stylex.props(styles.text)}>
                {type === 'free' && 'Free'}
                {type === 'booked' && 'Booked'}
                {type === 'sold' && 'Not for sale'}
            </span>
        </div>
    );
};
