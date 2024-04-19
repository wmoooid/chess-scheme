import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

type AppStoreProviderProps = {
    children: ReactNode;
};

const AppStoreProvider = ({ children }: AppStoreProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;
