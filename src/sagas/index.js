import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api';

export default function* rootSaga() {
    yield takeLatest('FETCH_TASKS_REQUEST', watchFetchTasks);
}

function* watchFetchTasks() {
  try {
    const { data } = yield call(api.fetchTasks);
    yield put({
      type: 'FETCH_TASKS_SUCCEEDED',
      payload: { tasks: data },
    });
  } catch (e) {
    yield put({
      type: 'FETCH_TASKS_FAILED',
      payload: { error: e.message },
    });
  }
}
