/*
    CSIT 441 Term Project
    TicTacToe MiniMax Algorithm

    Frontend GUI
    Javascript Bruteforce Algorithm Code
    Includes Timer Functionality

    Author: Aaron Burkett
    Date:   4/29/2025
    
    Filename: bruteforce_script.js
*/

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let board = Array(9).fill(null);
    let gameOver = false;

    function checkWinner(board) {
        const winPatterns = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.includes(null) ? null : "Draw";
    }

    function animateCell(index, player) {
        const cell = cells[index];
        board[index] = player;
        cell.textContent = player;
        cell.classList.add("animated");

        // Remove animation class after it ends
        cell.addEventListener("animationend", () => {
            cell.classList.remove("animated");
        }, { once: true });
    }

    function bruteForceAIMove() {
        for (let i = 0; i < 9; i++) {
            if (!board[i]) {
                board[i] = "O";
                if (checkWinner(board) === "O") {
                    animateCell(i, "O");
                    return;
                }
                board[i] = null;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!board[i]) {
                board[i] = "X";
                if (checkWinner(board) === "X") {
                    animateCell(i, "O");
                    return;
                }
                board[i] = null;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!board[i]) {
                animateCell(i, "O");
                return;
            }
        }
    }

    function handleClick(index) {
        if (!board[index] && !gameOver && currentPlayer === "X") {
            animateCell(index, "X");
            const result = checkWinner(board);
            if (result) {
                gameOver = true;
                alert(result === "Draw" ? "It's a draw!" : `${result} wins!`);
                return;
            }

            currentPlayer = "O";
            setTimeout(() => {
                bruteForceAIMove();
                const result = checkWinner(board);
                if (result) {
                    gameOver = true;
                    alert(result === "Draw" ? "It's a draw!" : `${result} wins!`);
                    return;
                }
                currentPlayer = "X";
            }, 300);
        }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => handleClick(index));
    });

    resetButton.addEventListener("click", () => {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("animated");
        });
        currentPlayer = "X";
        gameOver = false;
    });
});