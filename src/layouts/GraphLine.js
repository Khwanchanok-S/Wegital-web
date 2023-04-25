// import React from 'react';
// import { Line } from 'react-chartjs-2';

// export default function  GraphLine = ({ dataShow }) => {
//   const data = {
//     labels: dataShow.map(data => data.date),
//     datasets: [
//       {
//         label: 'Weight per Day',
//         data: dataShow.map(data => data.weight),
//         fill: false,
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgba(255, 99, 132, 0.2)',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//       x: {
//         type: 'category',
//       },
//       yAxes: [
//         {
//           type: 'linear', // ลงทะเบียน scale "linear"
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default GraphLine;
