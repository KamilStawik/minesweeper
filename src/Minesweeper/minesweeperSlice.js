import { createSlice } from "@reduxjs/toolkit";
import { difficultyLevels } from "./consts";
import getGrid from "./getGrid";
import revealSurroundingFields from "./revealSurroundingFields";
import { getScoreBoardFromLocalStorage } from "./minesweeperLocalStorage";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            difficultyLevel: "beginner",
            grid: getGrid("beginner"),
            gameStatus: "initial",
            bestTimes: getScoreBoardFromLocalStorage(),
        },

        reducers: {
            leftClick: (state, { payload: id }) => {
                state.gameStatus === "initial" && (state.grid = getGrid(state.difficultyLevel, id));
                state.gameStatus === "initial" && (state.gameStatus = "gameIsOn");
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].revealed = true;
                state.grid[index].mine === true && (state.gameStatus = "lost");

                const difficultyLevelsIndex = difficultyLevels.findIndex(difficultyLevel => difficultyLevel.name === state.difficultyLevel)
                const minesQuantity = difficultyLevels[difficultyLevelsIndex].minesQuantity;

                if (state.grid[index].surroundingMines === 0) {
                    const idsFieldsToReveal = revealSurroundingFields(state.grid, index);
                    idsFieldsToReveal.forEach(idFieldToReveal => { state.grid[idFieldToReveal].revealed = true });
                };

                let fieldsRevealed = 0;
                state.grid.forEach(field => {
                    field.revealed === true && (fieldsRevealed = fieldsRevealed + 1);
                });
                fieldsRevealed === state.grid.length - minesQuantity && state.gameStatus !== "lost" && (state.gameStatus = "won");

                if (state.gameStatus === "lost" || state.gameStatus === "won") {
                    state.grid.forEach(field => {
                        field.mine === true && (field.revealed = true);
                    });
                };
            },
            newGameButtonClick: (state) => {
                state.gameStatus = "initial";
                state.grid = getGrid(state.difficultyLevel);
            },
            setNewDifficultyLevel: (state, { payload }) => {
                state.gameStatus = "initial";
                state.difficultyLevel = payload;
                state.grid = getGrid(state.difficultyLevel);
            },
            rightClick: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);

                if (state.grid[index].markedAsMine === false && state.grid[index].markedAsQuestion === false) {
                    state.grid[index].markedAsMine = true;
                } else if (state.grid[index].markedAsMine === true && state.grid[index].markedAsQuestion === false) {
                    state.grid[index].markedAsMine = false;
                    state.grid[index].markedAsQuestion = true;
                } else if (state.grid[index].markedAsMine === false && state.grid[index].markedAsQuestion === true) {
                    state.grid[index].markedAsMine = false;
                    state.grid[index].markedAsQuestion = false;
                };
            },
            setBestTime: (state, { payload }) => {
                switch (state.difficultyLevel) {
                    case "beginner":
                        state.bestTimes.beginner.push(payload);
                        state.bestTimes.beginner.sort((a, b) => a - b);
                        state.bestTimes.beginner.length > 5 && state.bestTimes.beginner.pop();
                        break;
                    case "intermediate":
                        state.bestTimes.intermediate.push(payload);
                        state.bestTimes.intermediate.sort((a, b) => a - b);
                        state.bestTimes.intermediate.length > 5 && state.bestTimes.intermediate.pop();
                        break;
                    case "expert":
                        state.bestTimes.expert.push(payload);
                        state.bestTimes.expert.sort((a, b) => a - b);
                        state.bestTimes.expert.length > 5 && state.bestTimes.expert.pop();
                        break;
                };
            },
        },
    });

export const {
    checkIfGameOver,
    setRevealed,
    newGameButtonClick,
    setNewDifficultyLevel,
    rightClick,
    leftClick,
    setBestTime,
} = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export const selectDifficultyLevel = state => state.minesweeper.difficultyLevel;
export const selectGameStatus = state => state.minesweeper.gameStatus;
export const selectBestTimes = state => state.minesweeper.bestTimes;
export const selectBestTime = state => {
    switch (state.minesweeper.difficultyLevel) {
        case "beginner":
            return state.minesweeper.bestTimes.beginner;
        case "intermediate":
            return state.minesweeper.bestTimes.intermediate;
        default:
            return state.minesweeper.bestTimes.expert;
    };
};

export default minesweeperSlice.reducer;