import {LOADING_START, LOADING_END, FETCH_DATA} from './types';

const initialBaseState = {
  loading: false
};

export const baseReducer = (state = initialBaseState, action) => {
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

const initialDataState = {
  data: null
}

export const dataReducer = (state = initialDataState, action) => {
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