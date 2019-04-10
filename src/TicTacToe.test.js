import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe, {reducer, initial_state, check_winner} from './TicTacToe';

const i = 0, j = 0;

it('renders a game board', () => {
    const root = document.createElement('div');
    ReactDOM.render(<TicTacToe />, root);

    const num_rows = 3,
        board_size = num_rows ** 2,
        board = root.querySelector('#board'),
        rows = root.querySelectorAll('.row'),
        squares = root.querySelectorAll('.square'),
        buttons = root.querySelectorAll('.square button');

    expect(board).not.toBeNull();
    expect(rows.length).toEqual(num_rows);
    expect(squares.length).toEqual(board_size);
    expect(buttons.length).toEqual(board_size);

    ReactDOM.unmountComponentAtNode(root);
});

it('has initial state containing a board, a turn and a winner', () => {
    expect(Object.keys(initial_state())).toEqual(expect.arrayContaining(['board', 'turn', 'winner']));
});

it('has a null winner at game start', () => {
    expect(initial_state().winner).toBeNull();
});

it('has an empty 3x3 board at game start', () => {
    const {board} = initial_state();
    expect(board).toBeInstanceOf(Array);
    expect(board.length).toEqual(3);
    board.forEach(row => {
        expect(row.length).toEqual(3);
        row.forEach(square => expect(square).toBeNull());
    });
});

it(`starts on X's turn`, () => {
    expect(initial_state().turn).toEqual('X');
});

it(`fills in clicked squares with the correct player's turn`, () => {
    const {board, turn} = reducer(initial_state(), {i, j});

    expect(board[i][j]).toEqual(initial_state().turn);

    const new_board = reducer({board, turn}, {i: i + 1, j: j + 1}).board;

    expect(new_board[i + 1][j + 1]).toEqual(turn);
});

it(`doesn't allow players to overwrite squares`, () => {
    let first_move = reducer(initial_state(), {i, j}),
        second_move = reducer(first_move, {i, j});

    expect(second_move.board[i][j]).toEqual(initial_state().turn);
});

it('correctly determines the winner', () => {
    [
        [
            ['X', 'X', 'X'],
            [null, null, null],
            [null, null, null]
        ],
        [
            ['X', null, null],
            ['X', null, null],
            ['X', null, null]
        ],
        [
            ['X', null, null],
            [null, 'X', null],
            [null, null, 'X']
        ],
        [
            [null, null, 'X'],
            [null, 'X', null],
            ['X', null, null]
        ]
    ].forEach(board => expect(check_winner(board, 'X')).toEqual('X'));
});

it('can tell if the game is a draw', () => {
    expect(
        check_winner([
            ['O', 'X', 'O'],
            ['O', 'X', 'X'],
            ['X', 'O', 'O']
        ], 'X')
    ).toEqual('No Player');
});

it('can reset the board for a new game', () => {
    expect(reducer(null, 'new_game')).toEqual(initial_state());
});