import { Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import { ArcElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)
const PieChart = () => {
    const data = {
        labels: ['ONE', 'TWO', 'THREE', 'FOUR'],
        datasets: [{

            data: [3, 2, 6, 4],
            backgroundColor: ['aqua', 'bloodorange', 'purple', 'red']

        }
        ]
    }
    const options = {

    }
    return (
        <Box display='flex'>
            <div className='App'>
                <div className='arc'>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Pie
                            data={data}
                            options={options}
                        >
                        </Pie>
                    </Box>
                </div>

            </div>
        </Box>
    )
}

export default PieChart
