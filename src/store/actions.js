import axios from 'axios';
import {
  LOADING_START, 
  LOADING_END, 
  FETCH_CASE_DATA, 
  FETCH_AGE_DEMOGRAPHIC_DATA,
  FETCH_SEX_DEMOGRAPHIC_DATA,
  FETCH_ETHNICITY_DEMOGRAPHIC_DATA
} from './types';

export const loadingStart = () => ({
  type: LOADING_START
});

export const loadingEnd = () => ({
  type: LOADING_END
});

export const fetchAllData = () => dispatch => {
  dispatch(loadingStart());
  fetchCaseData(dispatch)
  .then(() => fetchAgeData(dispatch))
  .then(() => fetchSexData(dispatch))
  .then(() => fetchEthnicityData(dispatch))
  .then(() => dispatch(loadingEnd()));
};

const parseCaseData = cases_json => {
  let labels = [];
  let new_count_confirmed = [];
  let total_count_confirmed = [];
  let new_count_deaths = [];
  let total_count_deaths = [];

  cases_json.forEach(obj => {
    labels.push(new Date(obj.date));
    new_count_confirmed.push(obj.newcountconfirmed);
    total_count_confirmed.push(obj.totalcountconfirmed);
    new_count_deaths.push(obj.newcountdeaths);
    total_count_deaths.push(obj.totalcountdeaths);
  });

  return {
    labels: labels,
    new_count_confirmed: new_count_confirmed,
    total_count_confirmed: total_count_confirmed,
    new_count_deaths: new_count_deaths,
    total_count_deaths: total_count_deaths
  };
};

const fetchCaseData = async (dispatch) => {
  await axios.get('https://data.ca.gov/api/3/action/datastore_search', {
    params: {
      resource_id: '926fd08f-cc91-4828-af38-bd45de97f8c3',
      q: 'Santa Clara',
      limit: 1000
    }
  })
    .then(response => {
      console.log(response.data); 
      dispatch({
        type: FETCH_CASE_DATA,
        payload: parseCaseData(response.data.result.records)
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const parseAgeData = age_data => {
  let labels = [];
  let total_confirmed = [];
  let confirmed_percentage = [];
  let total_deaths = [];
  let death_percentage = [];
  let california_age_percentage = [];
  const num_categories = 5;

  for (let i = age_data.length - num_categories; i < age_data.length; ++i) {
    labels.push(age_data[i].age_group);
    total_confirmed.push(age_data[i].totalpositive);
    confirmed_percentage.push(age_data[i].case_percent);
    total_deaths.push(age_data[i].deaths);
    death_percentage.push(age_data[i].deaths_percent);
    california_age_percentage.push(age_data[i].ca_percent);
  };

  return {
    labels: labels,
    total_confirmed: total_confirmed,
    confirmed_percentage: confirmed_percentage,
    total_deaths: total_deaths,
    death_percentage: death_percentage,
    california_age_percentage: california_age_percentage
  };
};

const fetchAgeData = async (dispatch) => {
  await axios.get('https://data.ca.gov/api/3/action/datastore_search', {
    params: {
      resource_id: '339d1c4d-77ab-44a2-9b40-745e64e335f2',
      limit: 10000
    }
  })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: FETCH_AGE_DEMOGRAPHIC_DATA,
        payload: parseAgeData(response.data.result.records)
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const parseSexData = sex_data => {
  let labels = [];
  let total_confirmed = [];
  let confirmed_percentage = [];
  let total_deaths = [];
  let death_percentage = [];
  let california_sex_percentage = [];
  const num_categories = 3;

  for (let i = sex_data.length - num_categories; i < sex_data.length; ++i) {
    labels.push(sex_data[i].sex);
    total_confirmed.push(sex_data[i].totalpositive2);
    confirmed_percentage.push(sex_data[i].case_percent);
    total_deaths.push(sex_data[i].deaths);
    death_percentage.push(sex_data[i].deaths_percent);
    california_sex_percentage.push(sex_data[i].ca_percent);
  };

  return {
    labels: labels,
    total_confirmed: total_confirmed,
    confirmed_percentage: confirmed_percentage,
    total_deaths: total_deaths,
    death_percentage: death_percentage,
    california_sex_percentage: california_sex_percentage
  };
};

const fetchSexData = async (dispatch) => {
  await axios.get('https://data.ca.gov/api/3/action/datastore_search', {
    params: {
      resource_id: 'ee01b266-0a04-4494-973e-93497452e85f',
      limit: 10000
    }
  })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: FETCH_SEX_DEMOGRAPHIC_DATA,
        payload: parseSexData(response.data.result.records)
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const parseEthnicityData = ethnicity_data => {
  let labels = [];
  let total_confirmed = [];
  let confirmed_percentage = [];
  let total_deaths = [];
  let death_percentage = [];
  let california_ethnicity_percentage = [];
  const num_categories = 8;

  for (let i = ethnicity_data.length - num_categories; i < ethnicity_data.length; ++i) {
    labels.push(ethnicity_data[i].race_ethnicity);
    total_confirmed.push(ethnicity_data[i].cases);
    confirmed_percentage.push(ethnicity_data[i].case_percentage);
    total_deaths.push(ethnicity_data[i].deaths);
    death_percentage.push(ethnicity_data[i].deaths_percentage);
    california_ethnicity_percentage.push(ethnicity_data[i].percent_ca_population);
  };

  return {
    labels: labels,
    total_confirmed: total_confirmed,
    confirmed_percentage: confirmed_percentage,
    total_deaths: total_deaths,
    death_percentage: death_percentage,
    california_ethnicity_percentage: california_ethnicity_percentage
  };
};

const fetchEthnicityData = async (dispatch) => {
  await axios.get('https://data.ca.gov/api/3/action/datastore_search', {
    params: {
      resource_id: '7e477adb-d7ab-4d4b-a198-dc4c6dc634c9',
      limit: 10000
    }
  })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: FETCH_ETHNICITY_DEMOGRAPHIC_DATA,
        payload: parseEthnicityData(response.data.result.records)
      });
    })
    .catch(error => {
      console.log(error);
    });
};