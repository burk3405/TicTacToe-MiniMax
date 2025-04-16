#include "game.h"
#include <limits>

Game::Game() : currentPlayer('X') {}

void Game::play()
{
    while (true)
    {
        board.printBoard();
        if (board.isWin('X'))
        {
            cout << "Player X wins!" << endl;
            break;
        }
        if (board.isWin('O'))
        {
            cout << "Player O wins!" << endl;
            break;
        }
        if (board.isFull())
        {
            cout << "It's a draw!" << endl;
            break;
        }

        if (currentPlayer == 'X')
        {
            int row, col;
            cout << "Enter your move (row and column): ";
            cin >> row >> col;
            if (row >= 0 && row < 3 && col >= 0 && col < 3 && board.getAvailableMoves().size() > 0)
            {
                board.makeMove(row, col, 'X');
                currentPlayer = 'O';
            }
            else
            {
                cout << "Invalid move. Try again." << endl;
            }
        }
        else
        {
            pair<int, int> bestMove = getBestMove();
            board.makeMove(bestMove.first, bestMove.second, 'O');
            currentPlayer = 'X';
        }
    }
}

int Game::minimax(Board &board, int depth, bool isMaximizing)
{
    if (board.isWin('O'))
        return 10 - depth;
    if (board.isWin('X'))
        return depth - 10;
    if (board.isFull())
        return 0;

    if (isMaximizing)
    {
        int maxEval = numeric_limits<int>::min();
        for (const auto &move : board.getAvailableMoves())
        {
            board.makeMove(move.first, move.second, 'O');
            int eval = minimax(board, depth + 1, false);
            board.undoMove(move.first, move.second);
            maxEval = max(maxEval, eval);
        }
        return maxEval;
    }
    else
    {
        int minEval = numeric_limits<int>::max();
        for (const auto &move : board.getAvailableMoves())
        {
            board.makeMove(move.first, move.second, 'X');
            int eval = minimax(board, depth + 1, true);
            board.undoMove(move.first, move.second);
            minEval = min(minEval, eval);
        }
        return minEval;
    }
}

pair<int, int> Game::getBestMove()
{
    int bestValue = numeric_limits<int>::min();
    pair<int, int> bestMove = {-1, -1};
    for (const auto &move : board.getAvailableMoves())
    {
        board.makeMove(move.first, move.second, 'O');
        int moveValue = minimax(board, 0, false);
        board.undoMove(move.first, move.second);
        if (moveValue > bestValue)
        {
            bestValue = moveValue;
            bestMove = move;
        }
    }
    return bestMove;
}