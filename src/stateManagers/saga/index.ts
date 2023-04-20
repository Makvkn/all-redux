import {all} from "redux-saga/effects"
import {countWatcher} from "./countSaga";
import {userWatcher} from "./userSaga";

//our root watcher for many watchers
export function* rootWatcher() {
    yield all([countWatcher(), userWatcher() ])
}