import { takeEvery, call, select } from 'redux-saga/effects';
import { saveScoreBoardInLocalStorage } from './minesweeperLocalStorage';
import { selectBestTimes } from './minesweeperSlice';

function* saveScoreBoardInLocalStorageHandler() {
    const bestTimes = yield select(selectBestTimes);
    yield call(saveScoreBoardInLocalStorage, bestTimes);
    yield console.log("działa");
}

export function* minesweeperSaga() {
    yield takeEvery("*", saveScoreBoardInLocalStorageHandler);
}