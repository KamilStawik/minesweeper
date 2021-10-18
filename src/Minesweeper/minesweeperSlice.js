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
        },
    });

console.log(exampleGrid);

export const { setGrid } = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export default minesweeperSlice.reducer;