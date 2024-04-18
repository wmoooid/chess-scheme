import { globals } from '@/app/styles/globals.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
        padding: '1.5rem 0',
    },
    logoWrapper: {
        userSelect: 'none',
    },
    logoText: {
        fontSize: '1rem',
    },
});

export function Header() {
    return (
        <header>
            <div {...stylex.props(globals.container)}>
                <div {...stylex.props(styles.wrapper)}>
                    <div {...stylex.props(styles.logoWrapper)}>
                        <span {...stylex.props(styles.logoText)}>Chess Scheme</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
