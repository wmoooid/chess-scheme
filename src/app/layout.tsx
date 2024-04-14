import Header from '@/blocks/header';
import Footer from '@/blocks/footer';

import { colors } from '@/app/globals.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    defaults: {
        flexGrow: 1,
        color: colors.mainColor,
    },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div {...stylex.props(styles.defaults)}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
