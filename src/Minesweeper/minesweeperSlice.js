import { createSlice } from "@reduxjs/toolkit";
import { difficultyLevels } from "./consts";
import getGrid from "./getGrid";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            difficultyLevel: "beginner",
            grid: getGrid("beginner"),
            gameStatus: "initial",
            bestTimes: {
                beginner: 0,
                intermediate: 0,
                expert: 0,
            }
        },

        reducers: {
            leftClick: (state, { payload: id }) => {
                state.gameStatus === "initial" && (state.grid = getGrid(state.difficultyLevel, id));
                state.gameStatus === "initial" && (state.gameStatus = "gameIsOn");
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].revealed = true;
                state.grid[index].mine === true && (state.gameStatus = "lost");

                if (state.grid[index].markedAsMine === true) {
                    state.grid[index].markedAsMine = false;
                };
                state.grid[index].markedAsQuestion === true && (state.grid[index].markedAsQuestion = false);

                const difficultyLevelsIndex = difficultyLevels.findIndex(difficultyLevel => difficultyLevel.name === state.difficultyLevel)
                const minesQuantity = difficultyLevels[difficultyLevelsIndex].minesQuantity;

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
            revealSurroundingFields: (state, { payload }) => {
                const dependentFields = [
                    field => field.coordinates.column === payload.column - 1 && field.coordinates.row === payload.row - 1,
                    field => field.coordinates.column === payload.column && field.coordinates.row === payload.row - 1,
                    field => field.coordinates.column === payload.column + 1 && field.coordinates.row === payload.row - 1,
                    field => field.coordinates.column === payload.column - 1 && field.coordinates.row === payload.row,
                    field => field.coordinates.column === payload.column + 1 && field.coordinates.row === payload.row,
                    field => field.coordinates.column === payload.column - 1 && field.coordinates.row === payload.row + 1,
                    field => field.coordinates.column === payload.column && field.coordinates.row === payload.row + 1,
                    field => field.coordinates.column === payload.column + 1 && field.coordinates.row === payload.row + 1,
                ];
                dependentFields.forEach(dependentField => {
                    const targetIndex = state.grid.findIndex(dependentField);
                    state.grid[targetIndex] && (state.grid[targetIndex].revealed = true);
                    state.grid[targetIndex] && (state.grid[targetIndex].markedAsMine = false);
                    state.grid[targetIndex] && (state.grid[targetIndex].markedAsQuestion = false);
                });
            },
            setBestTime: (state, { payload }) => {
                switch (state.difficultyLevel) {
                    case "beginner":
                        (payload < state.bestTimes.beginner || state.bestTimes.beginner === 0) && (state.bestTimes.beginner = payload);
                        break;
                    case "intermediate":
                        (payload < state.bestTimes.intermediate || state.bestTimes.intermediate === 0) && (state.bestTimes.intermediate = payload);
                        break;
                    case "expert":
                        (payload < state.bestTimes.expert || state.bestTimes.expert === 0) && (state.bestTimes.expert = payload);
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
    revealSurroundingFields,
    leftClick,
    setBestTime,
} = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export const selectDifficultyLevel = state => state.minesweeper.difficultyLevel;
export const selectGameStatus = state => state.minesweeper.gameStatus;
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