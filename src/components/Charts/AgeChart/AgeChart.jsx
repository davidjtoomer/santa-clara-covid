import React from 'react';
import {useSelector} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

const AgeChart = () => {
  const age_data = useSelector(state => state.data.age);

  return (
    <div className='age-chart-container'>
      <div className='age-chart-title'>
        <h5>Age</h5>
      </div>
      {age_data &&
        <div className='age-charts'>
          <div className='age-chart'>
            <Doughnut
              data = {{
                labels: age_data.labels,
                datasets: [
                  {
                    label: 'Cases',
                    data: age_data.total_confirmed,
                    backgroundColor: [
                      '#a9a9a9',
                      '#82c9e6',
                      '#f3f5f4',
                      '#f45060',
                      '#f4d44d'
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
          <div className='age-chart'>
            <Doughnut
              data = {{
                labels: age_data.labels,
                datasets: [
                  {
                    label: 'Deaths',
                    data: age_data.total_confirmed,
                    backgroundColor: [
                      '#a9a9a9',
                      '#82c9e6',
                      '#f3f5f4',
                      '#f45060',
                      '#f4d44d'
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

export default AgeChart;