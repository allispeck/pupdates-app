import apiAxios from "Constants";
import {petCreation} from "actions/PetActions";
import {callAction} from "setupTests";
import * as petActionTypes from "actionTypes/PetTypes";

jest.mock("Constants");

const pet = {
    id: 1,
    name: "McFly",
    date_of_birth: "10/12/2005",
    breed: "Pug",
}

const createPetPayload = {
    name: "McFly",
    date_of_birth: "10/12/2005",
    breed: "Pug",
}

describe("PetActions", () => {
    it("will successfully create a pet", async () => {
        apiAxios.post.mockResolvedValue({data: {data: pet}});
        const mockDispatch = jest.fn();

        await callAction(mockDispatch, petCreation, createPetPayload);

        expect(mockDispatch).toHaveBeenCalledWith({
            pending: true,
            error: {},
            type: petActionTypes.PET_CREATION_PENDING
        });
        expect(mockDispatch).toHaveBeenCalledWith({
            pending: false,
            error: {},
            pet,
            type: petActionTypes.PET_CREATION_SUCCESS
        });
    });

    it("will catch error when creating pet fails", async () => {
        const error = {
            response: {
                data: {
                    errors: ["Failure"]
                }
            }
        };
        apiAxios.post.mockRejectedValue(error);
        const mockDispatch = jest.fn();

        await callAction(mockDispatch, petCreation, createPetPayload);

        expect(mockDispatch).toHaveBeenCalledWith({
            pending: false,
            type: petActionTypes.PET_CREATION_FAILURE,
            error: error.response.data.errors
        });
    })
})