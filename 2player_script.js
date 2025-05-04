/*
    CSIT 441 Term Project
    TicTacToe MiniMax Algorithm

    Frontend GUI
    Javascript 2 Player Code

    Author: Aaron Burkett
    Date:   4/24/2025
    
    Filename: 2player_script.js
*/

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let board = Array(9).fill(null);

    function animateCell(index, player) {
        const cell = cells[index];
        board[index] = player;
        cell.textContent = player;
        cell.classList.add("animated");

        // Remove the class after animation ends
        cell.addEventListener("animationend", () => {
            cell.classList.remove("animated");
        }, { once: true });
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (!board[index]) {
                animateCell(index, currentPlayer);
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });

    resetButton.addEventListener("click", () => {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("animated");
        });
        currentPlayer = "X";
    });
});