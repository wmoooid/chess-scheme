import ChessFilter from '@/blocks/chess-filter';
import ChessGrid from '@/blocks/chess-grid';
import { AppStoreProvider } from './store';

const App = () => {
    return (
        <AppStoreProvider>
            <ChessFilter />
            <ChessGrid />
        </AppStoreProvider>
    );
};
export default App;
