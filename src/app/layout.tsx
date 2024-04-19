import Header from '@/components/header';
import Footer from '@/components/footer';

import { colors } from '@/app/styles/globals.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    defaults: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        color: colors.mainColor,
        backgroundColor: colors.mainBackground,
    },
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div {...stylex.props(styles.defaults)}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;
