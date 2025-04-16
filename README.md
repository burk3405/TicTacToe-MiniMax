# TicTacToe-MiniMax

This project aims to implement the MiniMax algorithm and conduct empirical testing to determine whether its practical performance aligns with the theoretical predictions of formal algorithmic analysis. MiniMax is a fundamental decision-making algorithm in game theory, commonly used in turn-based, perfect-information games. Our implementation will focus on Tic-Tac-Toe with a timing mechanism, introducing an additional dimension to decision-making.

Project Objectives:
-Implement a Brute-Force algorithm.
-Implement the MiniMax algorithm with optimizations to improve efficiency.
-Integrate a timing mechanism to enforce decision constraints on player moves.
-Evaluate algorithmic performance against theoretical expectations in a timed Tic-Tac-Toe environment.
-Analyze the impact of time constraints on optimal decision-making and overall gameplay outcomes.

Game Selection: To test the MiniMax algorithm, we will use a Timed Tic-Tac-Toe variant, which maintains the following conditions:
-Turn-based structure where players alternate moves.
-Perfect information ensuring all game states and available moves are known to both players.
-Real-time constraints require players to make decisions within a set time limit.

Methodology:
-Develop and test a MiniMax implementation for Tic-Tac-Toe.
-Conduct experiments to compare actual performance with theoretical predictions, varying time constraints and search depth.
-Collect and analyze data on move quality, decision time, and game outcomes.
-Draw conclusions on the effectiveness of MiniMax under real-time constraints and propose possible optimizations.

Expected Outcomes:
-Verification of whether real-world decision-making aligns with theoretical MiniMax predictions in a simple game setting.
-Insights into how time constraints impact algorithmic performance and player decision quality.
-Recommendations for improving MiniMax efficiency in real-time decision-making environments.
-This project will provide a practical exploration of game-theoretic decision-making using Tic-Tac-Toe as a testbed, bridging the gap between formal 
 algorithmic analysis and real-world application.





# Research Paper Portion
It is understood that Tic-Tac-Toe is a game played on a three-by-three grid by two players, who alternate placing the marks X and O in one of nine available spaces on the grid. The convention used in this paper is that the first player always uses the mark X, and the second player always uses the mark O. It is also understood that once a player places their mark on a space, that space can no longer be occupied by another future mark. 

There are 765 essentially different positions (state space complexity).
There are 26,830 possible games.
If played optimally by both players, the game will always end in a draw, making Tic-Tac-Toe a futile game. 

138 terminal board positions.
When X goes first:
91 distinct positions are won by X.
44 distinct positions are won by O.
3 distinct positions are drawn.


