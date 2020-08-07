import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-zoom';

const CasesChart = () => {
  const case_data = useSelector(state => state.data.cases);

  return (
    <div className='cases-chart-container'>
      <div className='cases-chart-title'>
        <h5>Confirmed Cases in Santa Clara County</h5>
      </div>
      <div className='cases-chart'>
        {case_data &&
          <Line
            data = {{
              labels: case_data.labels,
              datasets: [
                {
                  label: 'New Confirmed Cases',
                  data: case_data.new_count_confirmed,
                  yAxisID: 'new',
                  borderColor: '#82c9e6',
                  backgroundColor: 'transparent',
                  pointBackgroundColor: 'transparent',
                  pointBorderColor: 'transparent',
                  pointRadius: 4
                }, 
                {
                  label: 'Cumulative Confirmed Cases',
                  data: case_data.total_count_confirmed,
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
                // mode: 'x'
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

export default CasesChart;