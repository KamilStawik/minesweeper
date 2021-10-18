import { configureStore } from '@reduxjs/toolkit';
import minesweeperReducer from "./Minesweeper/minesweeperSlice";

const store = configureStore({
    reducer: {
        minesweeper: minesweeperReducer,
    },
});

export default store;