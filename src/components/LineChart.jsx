import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import apiclient from './../api';

const LineChart = () => {

  const [state, setstate] = useState([]);
  const [cases, setCases] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(()=>{
    if (!state.length > 0) {
      apiclient.get('https://api.covid19api.com/dayone/country/costa-rica/status/confirmed')
      .then(response => setstate(response.data));
    }
    const getCases = (data) => {
      return data.map(item => item.Cases);
    }
    const getDays = (data) => {
      return data.map(item => item.Date.substring(0,10));
    }

    setCases(getCases(state));
    setDays(getDays(state));
  }, [state]);

  return (
    <div>
      <Line
        data={{
          labels: [...days.slice(-15)],
          datasets: [
            {
              label: 'Casos totales por dia.',
              fill: false,
              lineTension: 0.5,
              pointBackgroundColor: '#fff',
              pointBorderColor: '#fff',
              backgroundColor: '#db3a34',
              borderColor: '#db3a34',
              borderWidth: 2,
              data: [...cases.slice(-15)],
            }
          ],
        }}
        options={{
          title: {
            display: true,
            text: 'Covid-19 History',
            fontSize: 15,
            fontColor: '#fff',
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: 'rgb(255, 255, 255)',
            }
          },
        }}
      />
    </div>
  )
}

export default LineChart;
