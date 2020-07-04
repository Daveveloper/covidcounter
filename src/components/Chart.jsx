import React from 'react';
import { Pie } from 'react-chartjs-2';



const Chart = ({yes, no}) => {

  const data = {
    datasets: [{
      data: [yes, no],
      backgroundColor: [
        '#db3a34',
        '#00a896',
      ],
      hoverBackgroundColor: [
        '#9e2a2b',
        '#028090',
      ],
      borderColor: 'rgba(0, 0, 0, 1)',
    }],
    labels: ['Yes', 'No'],
  }

  return (
    <div>
      <Pie data={data}/>
    </div>
  )
}

export default Chart;
