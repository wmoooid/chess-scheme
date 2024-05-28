import { colors } from '@/app/styles/globals.stylex';
import ApartmentsCardBase from '@/components/apartments-card-base';
import * as HoverCard from '@radix-ui/react-hover-card';
import stylex from '@stylexjs/stylex';

type ApartmentsHoverCardProps = {
    children?: React.ReactNode;
} & HoverCard.HoverCardProps;

const scaleIn = stylex.keyframes({
    '0%': { transform: 'translateY(0.5rem)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
});

const styles = stylex.create({
    card_wrapper: {
        maxWidth: '17rem',
        borderRadius: '0.75rem',
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.16), 0 0 4px 0 rgba(0, 0, 0, 0.08)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.accentBackground,
        overflow: 'hidden',
    },

    card_content: {
        pointerEvents: 'none',
        transformOrigin: 'var(--radix-hover-card-content-transform-origin)',
        animationName: scaleIn,
        animationDuration: '200ms',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out',
    },
});

export const ApartmentsHoverCard: React.FC<ApartmentsHoverCardProps> = ({ children }) => {
    return (
        <HoverCard.Root openDelay={300} closeDelay={0}>
            <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content {...stylex.props(styles.card_content)}>
                    <ApartmentsCardBase {...stylex.props(styles.card_wrapper)} />
                    <HoverCard.Arrow />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
};

type WithApartmentsHoverCardProps = {
    children: React.ReactNode;
};

export const WithApartmentsHoverCard: React.FC<WithApartmentsHoverCardProps> = ({ children }) => {
    return <ApartmentsHoverCard>{children}</ApartmentsHoverCard>;
};
