import React from 'react';
import {useSelector} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

const SexChart = () => {
  const sex_data = useSelector(state => state.data.sex);

  return (
    <div className='sex-chart-container'>
      <div className='sex-chart-title'>
        <h5>Sex (All–CA)</h5>
      </div>
      {sex_data &&
        <div className='sex-charts'>
          <div className='sex-chart'>
            <Doughnut
              data = {{
                labels: sex_data.labels,
                datasets: [
                  {
                    label: 'Cases',
                    data: sex_data.total_confirmed,
                    backgroundColor: [
                      '#a9a9a9',
                      '#82c9e6',
                      '#f3f5f4'
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
          <div className='sex-chart'>
            <Doughnut
              data = {{
                labels: sex_data.labels,
                datasets: [
                  {
                    label: 'Deaths',
                    data: sex_data.total_deaths,
                    backgroundColor: [
                      '#a9a9a9',
                      '#82c9e6',
                      '#f3f5f4'
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

export default SexChart;