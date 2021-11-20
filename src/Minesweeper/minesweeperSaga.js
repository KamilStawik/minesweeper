import { takeEvery, call, select } from 'redux-saga/effects';
import { saveScoreBoardInLocalStorage } from './minesweeperLocalStorage';
import { selectBestTimes, setBestTime } from './minesweeperSlice';

function* saveScoreBoardInLocalStorageHandler() {
    const bestTimes = yield select(selectBestTimes);
    yield call(saveScoreBoardInLocalStorage, bestTimes);
}

export function* minesweeperSaga() {
    yield takeEvery(setBestTime, saveScoreBoardInLocalStorageHandler);
}