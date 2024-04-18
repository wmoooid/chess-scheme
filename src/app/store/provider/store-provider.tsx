import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

type AppStoreProviderProps = {
    children: ReactNode;
};

const AppStore = createReduxStore();

function AppStoreProvider({ children }: AppStoreProviderProps) {
    return <Provider store={AppStore}>{children}</Provider>;
}

export default AppStoreProvider;
