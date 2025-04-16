// Game board header file

#ifndef BOARD_H
#define BOARD_H

#include <vector>
#include <iostream>
using namespace std;

class Board
{
public:
    Board();
    void printBoard() const;
    bool isFull() const;
    bool isWin(char player) const;
    vector<pair<int, int>> getAvailableMoves() const;
    void makeMove(int row, int col, char player);
    void undoMove(int row, int col);

private:
    vector<vector<char>> board;
};

#endif