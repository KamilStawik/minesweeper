import { createSlice } from "@reduxjs/toolkit";
import { difficultyLevels } from "./consts";
import getGrid from "./getGrid";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            difficultyLevel: "beginner",
            grid: getGrid("beginner"),
            flaggedFieldsQuantity: 0,
            gameStatus: "initial",
        },

        reducers: {
            leftClick: (state, { payload: id }) => {
                state.gameStatus === "initial" && (state.gameStatus = "gameIsOn");
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].revealed = true;
                state.grid[index].mine === true && (state.gameStatus = "lost");

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
                state.flaggedFieldsQuantity = 0;
            },
            setMarkedAsMine: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                // eslint-disable-next-line
                switch (state.grid[index].markedAsMine) {
                    case false:
                        state.grid[index].markedAsMine = true;
                        state.flaggedFieldsQuantity = state.flaggedFieldsQuantity + 1;
                        break;
                    case true:
                        state.grid[index].markedAsMine = false;
                        state.flaggedFieldsQuantity = state.flaggedFieldsQuantity - 1;
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
                });
            },
        },
    });

export const {
    checkIfGameOver,
    setRevealed,
    newGameButtonClick,
    setMarkedAsMine,
    revealSurroundingFields,
    leftClick
} = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export const selectDifficultyLevel = state => state.minesweeper.difficultyLevel;
export const selectGameStatus = state => state.minesweeper.gameStatus;
export const selectFlaggedFieldsQuantity = state => state.minesweeper.flaggedFieldsQuantity;
export default minesweeperSlice.reducer;