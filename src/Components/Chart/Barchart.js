import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);


 function Barchart (props){
    

const state = {
  labels: ['Student', 'Teacher', 'Staff'],
  datasets: [
    {
      label: 'Total',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [3,2,2]
    }
  ]
}
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Total Strength',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
export default Barchart;