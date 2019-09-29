import { all } from 'redux-saga/effects';
import {
  adminSignIn,
  adminSignOut,
  adminFetchUser,
  adminForgotPassword
} from '../admin/services/sagas';
import {
  adminResetPasswordWatch,
  adminSetPasswordWatch
} from '../admin/pages/reset-password/services/sagas';
import {
  fetchMediaSagaWatch,
  MediaUploadSagaWatch,
  mediaDeleteSagaWatch,
  mediaAltUpdateSaga
} from '../admin/pages/media/services/sagas';

export default function* root() {
  yield all([
    adminSignIn(),
    adminSignOut(),
    adminFetchUser(),
    adminForgotPassword(),
    adminResetPasswordWatch(),
    adminSetPasswordWatch(),
    fetchMediaSagaWatch(),
    MediaUploadSagaWatch(),
    mediaDeleteSagaWatch(),
    mediaAltUpdateSaga()
  ]);
}
