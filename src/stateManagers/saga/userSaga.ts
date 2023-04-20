import {put, takeEvery, call} from "redux-saga/effects";
import {actionAddMany, SET_TODOS} from "../redux/todoReducer";

//Fetch
const fetchUsersFromApi: any = () => fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

//worker
//yield = await
//put = dispatch
function* fetchUserWorker(): any {
    console.log('worker')
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(actionAddMany(json))
}

//watcher
//takeEvery = следит за выполнением
export function* userWatcher() {
    console.log('watcher')
    yield takeEvery(SET_TODOS, fetchUserWorker)
}