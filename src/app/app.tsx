import ChessFilter from '@/blocks/chess-filter';
import { ClassAttributes, HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function App(props: Readonly<JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>>) {
    return (
        <main {...props}>
            <ChessFilter />
        </main>
    );
}
