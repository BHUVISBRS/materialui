import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
const BarChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'wed', 'thurs', 'fri', 'sat'],
        datasets: [{
            label: '369',
            data: [3, 6, 3, 7, 2, 4],
            backgroundColor: 'skyblue',
            borderwidth: 1,
        },
        {
            label: '300',
            data: [1, 2, 5, 7, 8, 2],
            backgroundColor: 'pink',
            borderwidth: 1,
        }
        ]
    }
    const options = {

    }
    return (
        <div>
            <div className='outer'>
                <Bar style={{ Padding: '20px', width: '80%' }}
                    data={data}
                    options={options}
                >
                </Bar>
            </div>

        </div>
    )
}

export default BarChart
