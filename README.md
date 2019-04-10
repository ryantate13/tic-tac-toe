# Tic Tac Toe

Created to test out using React hooks for state management.

Demo: <https://ryantate13.github.io/tic-tac-toe/>

Inspired by [Fun Fun Function's live stream with Dan Abramov](https://youtu.be/G-aO5hzo1aw) which I enjoyed, but found the code a bit verbose.

Currently it:
  * Renders a game board
  * Has initial state containing a board, a turn and a winner
  * Has a null winner at game start
  * Has an empty 3x3 board at game start
  * Starts on X's turn
  * Fills in clicked squares with the correct player's turn
  * Doesn't allow players to overwrite squares
  * Correctly determines the winner
  * Can tell if the game is a draw
  * Can reset the board for a new game

In < 100 lines of JS 😊

### TODO
  * Implement dynamic board dimensions, 4x4, etc.
  * Implement time travel to previous states as in React example