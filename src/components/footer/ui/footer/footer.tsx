import { globals, colors } from '@/app/styles/globals.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    wrapper: {
        padding: '1.5rem 0',
    },
    text: {
        fontSize: '0.75rem',
        color: colors.grey50,
    },
});

export const Footer = () => {
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
};
