import React, {useReducer} from 'react';
import './TicTacToe.scss';

export function check_winner(board, turn) {
    const {length} = board,
        check = arr => arr.reduce((a, c) => a && c === turn, true);

    for (let i = 0; i < length; ++i)
        if (check(board[i]) || check(board.map(row => row[i])))
            return turn;

    const diagonal1 = [0, 1, 2].map(i => board[i][i]),
        diagonal2 = [2, 1, 0].map((i, j) => board[i][j]);

    if (check(diagonal1) || check(diagonal2))
        return turn;

    const draw = board.reduce((a, c) => a && c.reduce((a, c) => a && c, true), true);

    if (draw)
        return 'No Player';

    return null;
}

export function initial_state() {
    return {
        turn: 'X',
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        winner: null
    }
}

export function reducer(state, event) {
    if (event === 'new_game')
        return initial_state();

    const {i, j} = event,
        {board, turn} = state;

    if (board[i][j])
        return state;

    board[i][j] = turn;

    return {
        board,
        turn: turn === 'X' ? 'O' : 'X',
        winner: check_winner(board, turn)
    };
}

export default function TicTacToe() {
    const [state, dispatch] = useReducer(reducer, initial_state());

    window.Game = {state, dispatch};

    return <>
        <header>
            <h1>Tic Tac Toe</h1>
            <h3>{state.winner ? `${state.winner} Wins!` : `${state.turn}'s Turn`}</h3>
            {
                state.winner && <button onClick={() => dispatch('new_game')}>Play Again</button>
            }
        </header>
        <div id="board">
            {
                state.board.map((row, i) => <div className="row" key={i + row.join('')}>
                    {
                        row.map((square, j) => <div className="square" key={`${i}${j}${square}`}>
                            <button onClick={() => dispatch({i, j})} disabled={!!state.winner}>
                                {square}
                            </button>
                        </div>)
                    }
                </div>)
            }
        </div>
    </>;
}