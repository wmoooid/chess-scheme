import * as stylex from '@stylexjs/stylex';
import { colors, globals } from '@/app/styles/globals.stylex';
import { useState, useTransition } from 'react';

const styles = stylex.create({
    section: {
        marginTop: '2rem',
    },

    chess_body: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },

    chess_line: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },

    chess_cell: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        gap: '0.5rem',

        flexShrink: 0,
        flexGrow: 1,
        flexBasis: 1,

        padding: '0.65rem',
        minWidth: '4rem',

        borderRadius: '0.375rem',
        color: 'white',
        userSelect: 'none',
    },

    chess_cell_free: {
        backgroundColor: colors.green,
    },

    chess_cell_booked: {
        backgroundColor: colors.yellow,
    },

    chess_cell_muted: {
        backgroundColor: colors.accentBackground,
    },

    chess_cell_sold: {
        backgroundColor: colors.mutedColor,
    },

    cell_rooms: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: '90%',
        color: 'inherit',
    },

    cell_area: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '90%',
        color: 'inherit',
    },
});

type ChessLineProps = {
    cellsLine: ChessCellProps[];
};

type ChessCellProps = {
    state: 'free' | 'booked' | 'muted' | 'sold';
    rooms: string;
    area: number;
};

function generateRandomLayout(lines = 100, cells = 15) {
    const stateList = ['free', 'booked', 'muted', 'sold'];
    const roomsList = ['St', '1BR', '2BR', '3BR', '4BR', '5BR'];

    const getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const result = Array(lines)
        .fill(0)
        .map(() => {
            return Array(cells)
                .fill(0)
                .map(() => ({
                    state: stateList[getRandom(0, stateList.length)],
                    rooms: roomsList[getRandom(0, roomsList.length)],
                    area: getRandom(25, 905) + Number(Math.random().toFixed(2)),
                }));
        });

    return result;
}

export const ChessGrid = () => {
    const [data, setData] = useState(generateRandomLayout());
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            setData(generateRandomLayout());
        });
    };

    return (
        <section onClick={handleClick} {...stylex.props(styles.section)}>
            <div {...stylex.props(globals.container)}>
                <div {...stylex.props(styles.chess_body)}>
                    {data.map((line) => (
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
            {cellsLine.map(({ state, rooms, area }) => (
                <ChessCell key={state + rooms + area} state={state} rooms={rooms} area={area} />
            ))}
        </ul>
    );
};

const ChessCell = ({ state, rooms, area }: ChessCellProps) => {
    return (
        <li {...stylex.props(styles.chess_cell, styles[`chess_cell_${state}`])}>
            <strong {...stylex.props(styles.cell_rooms)}>{rooms}</strong>
            {!(state === 'muted') && <small {...stylex.props(styles.cell_area)}>{area}</small>}
        </li>
    );
};
