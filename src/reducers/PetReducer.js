import * as petActionTypes from "../actionTypes/PetTypes";

const initialState = {
    pets: [],
    pet: {},
    pending: false,
    error: {}
};

export const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case petActionTypes.PET_CREATION_SUCCESS:
            state.pets.push(action.pet);
            return {
                ...state,
                error: action.error,
            };
        case petActionTypes.PET_CREATION_PENDING:
        case petActionTypes.PET_CREATION_FAILURE:
            return {
                ...state,
                ...action
            };

        default:
            return state;
    }
};