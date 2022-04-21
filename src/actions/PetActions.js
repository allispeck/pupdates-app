/* Creation Actions */

import * as petActionTypes from "actionTypes/PetTypes";
import apiAxios from "Constants";

export const petCreationPending = () => {
    return {
        type: petActionTypes.PET_CREATION_PENDING,
        pending: true,
        error: {}
    }
};

export const petCreationSuccess = (pet) => {
    return {
        pet,
        type: petActionTypes.PET_CREATION_SUCCESS,
        pending: false,
        error: {}
    }
};

export const petCreationFailure = (error) => {
    return {
        type: petActionTypes.PET_CREATION_FAILURE,
        pending: false,
        error
    }
};

export const petCreation = (payload) => {
    return async dispatch => {
        try {
            dispatch(petCreationPending());
            const {data} = await apiAxios.post('api/pets', {
                name: payload.name,
                date_of_birth: payload.dateOfBirth,
                breed: payload.breed,
            });
            dispatch(petCreationSuccess(data.data))
        } catch (error) {
            dispatch(petCreationFailure(error.response.data.errors))
        }
    }
};