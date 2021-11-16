import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import minesweeperReducer from './Minesweeper/minesweeperSlice';
import { minesweeperSaga } from './Minesweeper/minesweeperSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        minesweeper: minesweeperReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(minesweeperSaga);

export default store;