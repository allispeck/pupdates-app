import {combineReducers} from 'redux';
import {userReducer} from "./UserReducer";
import {petReducer} from "./PetReducer";

export const rootReducer = combineReducers({
    userState: userReducer,
    petState: petReducer
});