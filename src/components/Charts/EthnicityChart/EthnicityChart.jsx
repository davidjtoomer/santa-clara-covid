import React from 'react';
import {useSelector} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

const EthnicityChart = () => {
  const ethnicity_data = useSelector(state => state.data.ethnicity);

  return (
    <div className='ethnicity-chart-container'>
      <div className='ethnicity-chart-title'>
        <h5>Ethnicity (All–CA)</h5>
      </div>
      {ethnicity_data &&
        <div className='ethnicity-charts'>
          <div className='ethnicity-chart'>
            <Doughnut
              data = {{
                labels: ethnicity_data.labels,
                datasets: [
                  {
                    label: 'Cases',
                    data: ethnicity_data.total_confirmed,
                    backgroundColor: [
                      '#f3f5f4',
                      '#f4d44d',
                      '#82c9e6',
                      '#f45060',
                      '#a9a9a9',
                      '#ff939e',
                      '#419be6',
                      '#1e2130'
                    ],
                    borderColor: '#f3f5f4',
                    borderWidth: 1
                  }
                ]
              }}
              options = {{
                title: {
                  display: true,
                  text: 'Cases'
                },
                legend: {
                  display: true,
                  position: 'left'
                }
              }}
            />
          </div>
          <div className='ethnicity-chart'>
            <Doughnut
              data = {{
                labels: ethnicity_data.labels,
                datasets: [
                  {
                    label: 'Deaths',
                    data: ethnicity_data.total_deaths,
                    backgroundColor: [
                      '#f3f5f4',
                      '#f4d44d',
                      '#82c9e6',
                      '#f45060',
                      '#a9a9a9',
                      '#ff939e',
                      '#419be6',
                      '#1e2130'
                    ],
                    borderColor: '#f3f5f4',
                    borderWidth: 1
                  }
                ]
              }}
              options = {{
                title: {
                  display: true,
                  text: 'Deaths'
                },
                legend: {
                  display: true,
                  position: 'left'
                }
              }}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default EthnicityChart;