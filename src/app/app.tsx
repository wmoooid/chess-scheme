import ChessFilter from '@/blocks/chess-filter';
import ChessGrid from '@/blocks/chess-grid';
import { AppStoreProvider } from './store';

export default function App() {
    return (
        <AppStoreProvider>
            <ChessFilter />
            <ChessGrid />
        </AppStoreProvider>
    );
}
