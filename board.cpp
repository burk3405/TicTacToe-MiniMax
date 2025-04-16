#include "board.h"

Board::Board() : board(3, vector<char>(3, ' ')) {}

void Board::printBoard() const
{
    for (const auto &row : board)
    {
        for (const auto &cell : row)
        {
            cout << (cell == ' ' ? '.' : cell) << " ";
        }
        cout << endl;
    }
}

bool Board::isFull() const
{
    for (const auto &row : board)
    {
        for (const auto &cell : row)
        {
            if (cell == ' ')
                return false;
        }
    }
    return true;
}

bool Board::isWin(char player) const
{
    // Check rows, columns, and diagonals
    for (int i = 0; i < 3; ++i)
    {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
            return true;
        if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
            return true;
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
        return true;
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
        return true;
    return false;
}

vector<pair<int, int>> Board::getAvailableMoves() const
{
    vector<pair<int, int>> moves;
    for (int i = 0; i < 3; ++i)
    {
        for (int j = 0; j < 3; ++j)
        {
            if (board[i][j] == ' ')
                moves.emplace_back(i, j);
        }
    }
    return moves;
}

void Board::makeMove(int row, int col, char player)
{
    board[row][col] = player;
}

void Board::undoMove(int row, int col)
{
    board[row][col] = ' ';
}