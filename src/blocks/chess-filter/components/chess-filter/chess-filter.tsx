import * as stylex from '@stylexjs/stylex';
import { FilterHeader } from '../filter-header/filter-header';
import { FilterBody } from '../filter-body/filter-body';
import { FilterFooter } from '../filter-footer/filter-footer';
import { colors, globals } from '@/app/globals.stylex';

const styles = stylex.create({
    section: {
        marginTop: '1rem',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',

        padding: '1.75rem',

        borderRadius: '1rem',
        backgroundColor: colors.accentBackground,
    },
});

export function ChessFilter() {
    return (
        <section {...stylex.props(styles.section)}>
            <div {...stylex.props(globals.container)}>
                <div {...stylex.props(styles.wrapper)}>
                    <FilterHeader />
                    <FilterBody />
                    <FilterFooter />
                </div>
            </div>
        </section>
    );
}
