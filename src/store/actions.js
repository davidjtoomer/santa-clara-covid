import axios from 'axios';
import {LOADING_START, LOADING_END, FETCH_DATA} from './types';

export const loadingStart = () => ({
  type: LOADING_START
});

export const loadingEnd = () => ({
  type: LOADING_END
});

export const fetchData = () => dispatch => {
  dispatch(loadingStart());

  // temporal data
  axios.get('https://data.ca.gov/api/3/action/datastore_search', {
    params: {
      resource_id: '926fd08f-cc91-4828-af38-bd45de97f8c3',
      q: 'Santa Clara',
      limit: 1000
    }
  })
    .then(response => response.result.records)
    .then(records => {
      console.log(records);
      dispatch({
        type: FETCH_DATA,
        payload: records
      });
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {
      dispatch(loadingEnd());
    });
};