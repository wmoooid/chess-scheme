import * as stylex from '@stylexjs/stylex';
import { globals } from '@/app/styles/globals.stylex';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/config/store';
import { styles } from './chess-grid.style';
import { useDeferredValue } from 'react';
import React from 'react';

type ChessLineProps = {
    cellsLine: ChessCellProps[];
};

type ChessCellProps = {
    status: 'free' | 'booked' | 'sold';
    rooms: string;
    area: number;
    isFiltered: boolean;
};

export const ChessGrid = () => {
    const apartmentsList = useSelector((state: RootState) => state.filter.apartmentsList);

    return (
        <section {...stylex.props(styles.section)}>
            <div {...stylex.props(globals.container)}>
                <div {...stylex.props(styles.chess_body)}>
                    {apartmentsList.map((line, index) => (
                        <ChessLine key={'line' + index} cellsLine={line} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ChessLine = ({ cellsLine }: ChessLineProps) => {
    const deferredLine = useDeferredValue(cellsLine);

    return (
        <ul {...stylex.props(styles.chess_line)}>
            {deferredLine.map((props) => (
                <ChessCell key={props.rooms + props.area} {...props} />
            ))}
        </ul>
    );
};

const ChessCell = React.memo(({ status, rooms, area, isFiltered }: ChessCellProps) => {
    return (
        <li {...stylex.props(styles.chess_cell, styles[`chess_cell_${status}`], isFiltered && styles.chess_cell_filtered)}>
            <strong {...stylex.props(styles.cell_rooms)}>{rooms}</strong>
            {!(status === 'sold') && <small {...stylex.props(styles.cell_area)}>{area}</small>}
        </li>
    );
});
