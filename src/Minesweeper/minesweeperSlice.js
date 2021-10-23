import { createSlice } from "@reduxjs/toolkit";
import getGrid from "./getGrid";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            grid: getGrid(),
        },

        reducers: {
            setGrid: (state, payload) => {
                state.grid = payload;
            },
            setReviled: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].reviled = !state.grid[index].reviled;
            },
            setMarkedAsMine: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].markedAsMine = !state.grid[index].markedAsMine;
            },
        },
    });

export const { setGrid, setReviled, setMarkedAsMine } = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export default minesweeperSlice.reducer;