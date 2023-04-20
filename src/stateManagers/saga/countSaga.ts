import {put, takeEvery} from "redux-saga/effects"
import {actionDecrease, actionIncrease, ASYNC_DECREMENT, ASYNC_INCREMENT} from "../redux/counterReducer";

//Имитируем async
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

//Worker
//put = своего рода dispatch
function* incrementWorker() {
    yield delay(3000)
    yield put(actionIncrease())
}

//Worker
function* decrementWorker() {
    yield delay(3000)
    yield put(actionDecrease())
}

//Watcher
//takeEvery отслеживает выполнение, передаем тип, а потом worker
export function* countWatcher() {
yield takeEvery(ASYNC_INCREMENT, incrementWorker)
yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}