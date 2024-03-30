import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Graph = () => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevState => {
        const newDataSet = { ...prevState.datasets[0] };
        const newData = Array.from({ length: prevState.labels.length }, () =>
          Math.floor(Math.random() * 100)
        );

        newDataSet.data = newData;
        newDataSet.backgroundColor = 'red';
        newDataSet.borderColor = 'blue';
        newDataSet.hoverBackgroundColor = 'green';
        newDataSet.hoverBorderColor = 'yellow';

        return { ...initialState, datasets: [newDataSet] };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <Bar data={data} />;
};

// const App = () => (
//   <div>
//     <h2>You can even make crazy graphs like this!</h2>
//     <Graph />
//   </div>
// );

// export default App;
