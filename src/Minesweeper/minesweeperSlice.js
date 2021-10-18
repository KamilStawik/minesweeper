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
        },
    });

export const { setGrid, setReviled, setMarked } = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export default minesweeperSlice.reducer;