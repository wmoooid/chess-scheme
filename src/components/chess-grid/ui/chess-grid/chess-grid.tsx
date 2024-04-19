import * as stylex from '@stylexjs/stylex';
import { useDeferredValue } from 'react';
import { globals } from '@/app/styles/globals.stylex';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/config/store';
import { styles } from './chess-grid.style';

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
    const defferedList = useDeferredValue(apartmentsList);

    return (
        <section {...stylex.props(styles.section)}>
            <div {...stylex.props(globals.container)}>
                <div {...stylex.props(styles.chess_body)}>
                    {defferedList.map((line) => (
                        // @ts-expect-error test data
                        <ChessLine key={line[0].state + line[1].area + line[2].rooms + line[3].area} cellsLine={line} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ChessLine = ({ cellsLine }: ChessLineProps) => {
    return (
        <ul {...stylex.props(styles.chess_line)}>
            {cellsLine.map((props) => (
                <ChessCell key={props.status + props.rooms + props.area} {...props} />
            ))}
        </ul>
    );
};

const ChessCell = ({ status, rooms, area, isFiltered }: ChessCellProps) => {
    return (
        <li {...stylex.props(styles.chess_cell, styles[`chess_cell_${status}`], isFiltered && styles.chess_cell_filtered)}>
            <strong {...stylex.props(styles.cell_rooms)}>{rooms}</strong>
            {!(status === 'sold') && <small {...stylex.props(styles.cell_area)}>{area}</small>}
        </li>
    );
};
