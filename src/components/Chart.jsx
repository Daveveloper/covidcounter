import React from 'react';
import { Pie } from 'react-chartjs-2';



const Chart = ({yes, no}) => {

  const data = {
    datasets: [{
      data: [yes, no],
      backgroundColor: [
        '#db3a34',
        '#ffffff',
      ],
      hoverBackgroundColor: [
        '#9e2a2b',
        '#d0d0d0',
      ],
      borderColor: 'rgba(0, 0, 0, 1)',
    }],
    labels: ['Yes', 'No'],
  }

  return (
    <div>
      <Pie
        data={data}
        options={{
          title: {
            display: true,
            text: 'Resultados de la encuesta',
            fontSize: 20,
            fontColor: '#ffffff',
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: '#fff',
            }
          },
        }}
      />
    </div>
  )
}

export default Chart;
