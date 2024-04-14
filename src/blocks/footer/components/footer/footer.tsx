import { globals, colors } from '@/app/globals.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    wrapper: {
        padding: '2rem 0',
    },
    text: {
        fontSize: '0.75rem',
        color: colors.grey50,
    },
});

export function Footer() {
    return (
        <footer>
            <div {...stylex.props(globals.container)}>
                <div {...stylex.props(styles.wrapper)}>
                    <a href='https://github.com/wmoooid' {...stylex.props(styles.text)}>
                        github.com/wmoooid
                    </a>
                </div>
            </div>
        </footer>
    );
}
