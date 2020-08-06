import {
  LOADING_START, 
  LOADING_END, 
  FETCH_CASE_DATA,
  FETCH_AGE_DEMOGRAPHIC_DATA,
  FETCH_SEX_DEMOGRAPHIC_DATA,
  FETCH_ETHNICITY_DEMOGRAPHIC_DATA
} from './types';

const initialBaseState = {
  loading: true
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
  };
};

const initialDataState = {
  cases: null,
  age: null,
  sex: null,
  ethnicity: null
};

export const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case FETCH_CASE_DATA: 
      return {
        ...state,
        cases: action.payload
      };
    case FETCH_AGE_DEMOGRAPHIC_DATA:
      return {
        ...state,
        age: action.payload
      };
    case FETCH_SEX_DEMOGRAPHIC_DATA:
      return {
        ...state,
        sex: action.payload
      };
    case FETCH_ETHNICITY_DEMOGRAPHIC_DATA:
      return {
        ...state,
        ethnicity: action.payload
      };
    default:
      return state;
  };
};