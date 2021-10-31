import { createSlice } from "@reduxjs/toolkit";
import getGrid from "./getGrid";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            difficultyLevel: "intermediate",
            grid: getGrid("beginner"),
            flaggedFieldsQuantity: 0,
            gameOver: false,
        },

        reducers: {
            setGrid: (state, payload) => {
                state.grid = payload;
            },
            checkIfGameOver: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].mine === true && (state.gameOver = true);

                const minesQuantity = 5;
                var fieldsRevealed = 0;

                state.grid.forEach(field => {
                    field.revealed === true && (fieldsRevealed = fieldsRevealed + 1);
                });
                fieldsRevealed === state.grid.length - minesQuantity && console.log("Wygrałeś!!!");
            },
            setRevealed: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].revealed = true;
            },
            setMarkedAsMine: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                switch (state.grid[index].markedAsMine) {
                    case false:
                        state.grid[index].markedAsMine = true;
                        state.flaggedFieldsQuantity = state.flaggedFieldsQuantity + 1;
                        break;
                    case true:
                        state.grid[index].markedAsMine = false;
                }
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

export const { setGrid, checkIfGameOver, setRevealed, setMarkedAsMine, revealSurroundingFields } = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export const selectDifficultyLevel = state => state.minesweeper.difficultyLevel;
export const selectGameOver = state => state.minesweeper.gameOver;
export const selectFlaggedFieldsQuantity = state => state.minesweeper.flaggedFieldsQuantity;
export default minesweeperSlice.reducer;