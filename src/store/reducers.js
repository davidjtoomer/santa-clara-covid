import {LOADING_START, LOADING_END, FETCH_DATA} from './types';

const initialState = {
  loading: false,
  data: null
};

export const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true
      };
    case LOADING_END:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: 
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}