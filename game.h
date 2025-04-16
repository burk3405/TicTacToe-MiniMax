#ifndef GAME_H
#define GAME_H

#include "board.h"
using namespace std;

class Game
{
public:
    Game();
    void play();

private:
    Board board;
    char currentPlayer;

    int minimax(Board &board, int depth, bool isMaximizing);
    pair<int, int> getBestMove();
};

#endif