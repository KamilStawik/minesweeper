import { createSlice } from "@reduxjs/toolkit";
import exampleGrid from "./exampleGrid";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            grid: exampleGrid,
        },

        reducers: {
            setGrid: (state, payload) => {
                state.grid = payload;
            },
            setReviled: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].reviled = !state.grid[index].reviled;
            },
            setMarked: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].marked = !state.grid[index].marked;
            },
            setFieldNumber: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].fieldNumber = (
                    (state.grid[index - 6] ? (state.grid[index - 6].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index - 5] ? (state.grid[index - 5].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index - 4] ? (state.grid[index - 4].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index - 1] ? (state.grid[index - 1].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 1] ? (state.grid[index + 1].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 4] ? (state.grid[index + 4].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 5] ? (state.grid[index + 5].bomb === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 6] ? (state.grid[index + 6].bomb === true ? 1 : 0) : 0)
                );
            },
        },
    });

export const { setGrid, setReviled, setMarked, setFieldNumber } = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export default minesweeperSlice.reducer;