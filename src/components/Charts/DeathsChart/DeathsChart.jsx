import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-zoom';

const DeathsChart = () => {
  const case_data = useSelector(state => state.data.cases);

  return (
    <div className='deaths-chart-container'>
      <div className='deaths-chart-title'>
        <h5>Deaths from COVID-19 in Santa Clara County</h5>
      </div>
      <div className='deaths-chart'>
        {case_data &&
          <Line
            data = {{
              labels: case_data.labels,
              datasets: [
                {
                  label: 'New COVID-19 Deaths',
                  data: case_data.new_count_deaths,
                  yAxisID: 'new',
                  borderColor: '#f4d44d',
                  backgroundColor: 'transparent',
                  pointBackgroundColor: 'transparent',
                  pointBorderColor: 'transparent',
                  pointRadius: 4
                }, 
                {
                  label: 'Cumulative COVID-19 Deaths',
                  data: case_data.total_count_deaths,
                  yAxisID: 'cumulative',
                  borderColor: '#f45060',
                  backgroundColor: 'transparent',
                  pointBackgroundColor: 'transparent',
                  pointBorderColor: 'transparent',
                  pointRadius: 4
                }
              ]
            }}
            options = {{
              responsive: true,
              pan: {
                enabled: true,
                mode: 'xy'
              },
              zoom: {
                enabled: true,
                mode: 'xy'
              },
              scales: {
                xAxes: [{
                  type: 'time',
                  time: {
                    unit: 'day'
                  },
                  gridLines: {
                    color: '#1e2130'
                  }
                }],
                yAxes: [{
                  id: 'new',
                  type: 'linear',
                  position: 'left',
                  gridLines: {
                    color: '#1e2130'
                  }
                }, {
                  id: 'cumulative',
                  type: 'linear',
                  position: 'right',
                  gridLines: {
                    color: '#1e2130'
                  }
                }]
              }
            }}
          />
        }
      </div>
    </div>
  );
}

export default DeathsChart;