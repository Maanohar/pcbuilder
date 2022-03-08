import { ActionTypes } from '../Constants/ActionTypes';

export const setMotherBoard = (items: any) => {
    return {
        type :ActionTypes.SET_MOTHERBOARD,
        payload : items
    }
};

export const setCPU = (items: any) => {
    return {
        type :ActionTypes.SET_CPU,
        payload : items
    }
};

export const setRAM = (items: any) => {
    return {
        type :ActionTypes.SET_RAM,
        payload : items
    }
};


