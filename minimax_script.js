/*
    CSIT 441 Term Project
    TicTacToe MiniMax Algorithm

    Frontend GUI
    Javascript MiniMax Algorithm Code
    Includes Timer Functionality

    Author: Aaron Burkett
    Date:   4/24/2025
    
    Filename: minimax_script.js
*/

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    const scoreX = document.getElementById("scoreX");
    const scoreO = document.getElementById("scoreO");
    const scoreDraw = document.getElementById("scoreDraw");
    const timerDisplay = document.getElementById("time");

    let board = Array(9).fill(null);
    let currentPlayer = "X";
    let scores = { X: 0, O: 0, Draw: 0 };
    let timer, timeLeft;

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function startTimer() {
        timeLeft = 10;
        timerDisplay.textContent = timeLeft;
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft === 0) {
                clearInterval(timer);
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                    makeAIMove();
                }
            }
        }, 1000);
    }

    function checkWinner(b) {
        for (const [a, b1, c] of winPatterns) {
            if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
                return b[a];
            }
        }
        return b.includes(null) ? null : "Draw";
    }

    function updateScores(winner) {
        if (winner === "Draw") {
            scores.Draw++;
            scoreDraw.textContent = scores.Draw;
        } else {
            scores[winner]++;
            if (winner === "X") scoreX.textContent = scores.X;
            else scoreO.textContent = scores.O;
        }
    }

    function minimax(b, isMax) {
        let result = checkWinner(b);
        if (result === "X") return { score: -10 };
        if (result === "O") return { score: 10 };
        if (result === "Draw") return { score: 0 };

        let best = isMax ? { score: -Infinity } : { score: Infinity };

        b.forEach((val, idx) => {
            if (!val) {
                b[idx] = isMax ? "O" : "X";
                let score = minimax(b, !isMax).score;
                b[idx] = null;

                if (isMax && score > best.score) best = { score, idx };
                if (!isMax && score < best.score) best = { score, idx };
            }
        });

        return best;
    }

    function makeAIMove() {
        let move = minimax([...board], true).idx;
        if (move !== undefined) {
            board[move] = "O";
            cells[move].textContent = "O";
            cells[move].classList.add("animated");
            let winner = checkWinner(board);
            if (winner) {
                updateScores(winner);
                clearInterval(timer);
                setTimeout(resetBoard, 2000);
            } else {
                currentPlayer = "X";
                startTimer();
            }
        }
    }

    function handleClick(e) {
        let index = e.target.getAttribute("data-index");
        if (!board[index] && currentPlayer === "X") {
            board[index] = "X";
            e.target.textContent = "X";
            e.target.classList.add("animated");
            let winner = checkWinner(board);
            if (winner) {
                updateScores(winner);
                clearInterval(timer);
                setTimeout(resetBoard, 2000);
            } else {
                currentPlayer = "O";
                clearInterval(timer);
                setTimeout(makeAIMove, 500);
            }
        }
    }

    function resetBoard() {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("animated");
        });
        currentPlayer = "X";
        startTimer();
    }

    resetButton.addEventListener("click", () => {
        resetBoard();
    });

    cells.forEach(cell => {
        cell.addEventListener("click", handleClick);
    });

    resetBoard(); // initialize
});

