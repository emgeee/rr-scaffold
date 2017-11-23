import {
  put,
  takeLatest
} from 'redux-saga/effects'

function * test (action) {
  yield put({
    type: 'FOO',
    payload: 'bar'
  })
}

export default function * rootSaga () {
  yield takeLatest('FOO-start', test)
}
