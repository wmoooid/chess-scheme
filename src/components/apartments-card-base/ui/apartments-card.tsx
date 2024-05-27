import { colors } from '@/app/styles/globals.stylex';
import { StatusToast } from '@/shared/ui/status-toast/status-toast';
import * as stylex from '@stylexjs/stylex';
import { FC } from 'react';

const styles = stylex.create({
    wrapper: {
        maxWidth: '32rem',
        width: '100%',
        height: '100%',
        padding: '1.5rem',
        backgroundColor: colors.mainBackground,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        justifyContent: 'space-between',
    },
    image_wrapper: {
        width: '100%',
        height: '100%',
        padding: '0.5rem',
        margin: '1rem 0',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    number: {
        fontSize: '0.75rem',
        fontWeight: 500,
        color: colors.mutedColor,
    },
    type: {
        fontSize: '0.75rem',
        fontWeight: 500,
    },
    price_wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 600,
    },
    price_per_unit: {
        fontSize: '0.75rem',
        fontWeight: 500,
        color: colors.mutedColor,
    },
});

type ApartmentsCardBaseProps = {
    className?: string;
    style?: Readonly<{ [key: string]: string | number }>;
};

export const ApartmentsCardBase: FC<ApartmentsCardBaseProps> = (props) => {
    return (
        <article {...props}>
            <div {...stylex.props(styles.wrapper)}>
                <div {...stylex.props(styles.header)}>
                    <StatusToast type='free' />
                    <span {...stylex.props(styles.number)}>№911</span>
                </div>
                <div {...stylex.props(styles.image_wrapper)}>
                    <img {...stylex.props(styles.image)} src='/assets/1br-a.jpeg' alt='' />
                </div>
                <div {...stylex.props(styles.footer)}>
                    <span {...stylex.props(styles.type)}>1BR B, 790,29 sqft</span>
                    <div {...stylex.props(styles.price_wrapper)}>
                        <strong {...stylex.props(styles.price)}>AED 995,000</strong>
                        <small {...stylex.props(styles.price_per_unit)}>1,269.00 AED/sqft</small>
                    </div>
                </div>
            </div>
        </article>
    );
};
