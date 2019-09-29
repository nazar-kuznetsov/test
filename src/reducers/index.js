import { combineReducers } from 'redux';
import adminAuthorizationReducer from '../admin/services/reducer';
import adminResetPasswordReducer from '../admin/pages/reset-password/services/reducer';
import adminUploadReducer from '../admin/pages/media/services/reducer';

const rootReducer = combineReducers({
  adminAuthorizationReducer,
  adminResetPasswordReducer,
  adminUploadReducer
});


export default rootReducer;
