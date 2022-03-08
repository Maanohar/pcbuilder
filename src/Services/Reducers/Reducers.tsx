import { ActionTypes } from '../Constants/ActionTypes';
import { combineReducers } from 'redux';

export const initialState = {
 "motherboard":[],
 "ram":[],
 "cpu":[]
};

export const Reducer = (state : any = initialState, { type, payload} : any ) => {
    console.log(type);
    switch(type) {
        case ActionTypes.SET_MOTHERBOARD :
            return { ...state, motherboard: payload};
        case ActionTypes.SET_CPU :
            return { ...state, cpu: payload};
        case ActionTypes.SET_RAM :
            return { ...state, ram: payload};
        default :
            return state;
    }
}

const reducers = combineReducers({ Reducer });

export default reducers;
