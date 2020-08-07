import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllData} from '../../store/actions';
import CasesChart from './CasesChart/CasesChart';
import DeathsChart from './DeathsChart/DeathsChart';
import AgeChart from './AgeChart/AgeChart';
import SexChart from './SexChart/SexChart';
import EthnicityChart from './EthnicityChart/EthnicityChart';
import {BeatLoader} from 'react-spinners';
import './Charts.scss'

const Charts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.base.loading);

  useEffect(() => {
    dispatch(fetchAllData());
  }, []);

  return (
    <React.Fragment>
      {!loading
        ? <div className='charts'>
            <div className='time-charts'>
              <CasesChart/>
              <DeathsChart/>
            </div>
            <div className='demographic-charts'>
              <AgeChart/>
              <SexChart/>
              <EthnicityChart/>
            </div>
          </div>
        : <div className='beat-loader'>
            <BeatLoader
              color='#82c9e6'
              size='25'
              margin='15'
            />
          </div>
      }
    </React.Fragment>
  );
};

export default Charts;