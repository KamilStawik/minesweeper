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
            setFieldNumber: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);
                state.grid[index].fieldNumber = (
                    (state.grid[index - 6] ? (state.grid[index - 6].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index - 5] ? (state.grid[index - 5].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index - 4] ? (state.grid[index - 4].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index - 1] ? (state.grid[index - 1].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 1] ? (state.grid[index + 1].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 4] ? (state.grid[index + 4].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 5] ? (state.grid[index + 5].mine === true ? 1 : 0) : 0)
                    +
                    (state.grid[index + 6] ? (state.grid[index + 6].mine === true ? 1 : 0) : 0)
                );
            },
        },
    });

export const { setGrid, setReviled, setMarkedAsMine, setFieldNumber } = minesweeperSlice.actions;
export const selectGrid = state => state.minesweeper.grid;
export default minesweeperSlice.reducer;