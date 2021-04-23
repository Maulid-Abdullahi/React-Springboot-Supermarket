import authReducer from './auth/authReducer';

const authReducer = combineReducers({
    auth: authReducer,
})
export default authReducer;