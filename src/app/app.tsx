import FilterWrapper from '@/blocks/filter-block';
import ChessGrid from '@/blocks/chess-grid';
import { AppStoreProvider } from './store';

const App = () => {
    return (
        <AppStoreProvider>
            <FilterWrapper />
            <ChessGrid />
        </AppStoreProvider>
    );
};
export default App;
