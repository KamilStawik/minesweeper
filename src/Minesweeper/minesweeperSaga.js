import { takeEvery, call, put, select } from 'redux-saga/effects';
import { saveScoreBoardInLocalStorage } from './minesweeperLocalStorage';
import { selectBestTimes, selectGrid, setBestTime, leftClick } from './minesweeperSlice';

function* saveScoreBoardInLocalStorageHandler() {
    const bestTimes = yield select(selectBestTimes);
    yield call(saveScoreBoardInLocalStorage, bestTimes);
}

function* revealSurroundingFieldsHandler({ payload }) {
    const grid = yield select(selectGrid);

    if (grid[payload].surroundingMines === 0) {
        const fieldCoordinates = yield grid[payload].coordinates;

        //how to make some loop for this?
        const targetIndex1 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row - 1);
        yield grid[payload].surroundingMines === 0 && targetIndex1 !== -1 && grid[targetIndex1].revealed === false && (put(leftClick(targetIndex1)));
        const targetIndex2 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row - 1);
        yield grid[payload].surroundingMines === 0 && targetIndex2 !== -1 && grid[targetIndex2].revealed === false && (put(leftClick(targetIndex2)));
        const targetIndex3 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row - 1);
        yield grid[payload].surroundingMines === 0 && targetIndex3 !== -1 && grid[targetIndex3].revealed === false && (put(leftClick(targetIndex3)));
        const targetIndex4 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row);
        yield grid[payload].surroundingMines === 0 && targetIndex4 !== -1 && grid[targetIndex4].revealed === false && (put(leftClick(targetIndex4)));
        const targetIndex5 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row);
        yield grid[payload].surroundingMines === 0 && targetIndex5 !== -1 && grid[targetIndex5].revealed === false && (put(leftClick(targetIndex5)));
        const targetIndex6 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row + 1);
        yield grid[payload].surroundingMines === 0 && targetIndex6 !== -1 && grid[targetIndex6].revealed === false && (put(leftClick(targetIndex6)));
        const targetIndex7 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row + 1);
        yield grid[payload].surroundingMines === 0 && targetIndex7 !== -1 && grid[targetIndex7].revealed === false && (put(leftClick(targetIndex7)));
        const targetIndex8 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row + 1);
        yield grid[payload].surroundingMines === 0 && targetIndex8 !== -1 && grid[targetIndex8].revealed === false && (put(leftClick(targetIndex8)));
    };
}

export function* minesweeperSaga() {
    yield takeEvery(setBestTime, saveScoreBoardInLocalStorageHandler);
    //yield takeEvery(leftClick, revealSurroundingFieldsHandler);
}