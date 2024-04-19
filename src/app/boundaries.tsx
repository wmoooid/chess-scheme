import { ReactNode } from 'react';
import { AppStoreProvider } from './store';
import RootLayout from './layout';

const AppBoundaries = ({ children }: { children: ReactNode }) => {
    return (
        <AppStoreProvider>
            <RootLayout>{children}</RootLayout>
        </AppStoreProvider>
    );
};

export default AppBoundaries;
