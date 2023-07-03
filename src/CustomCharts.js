import { Typography } from "@mui/material";
import React, { useState } from "react";

import { Bar } from "react-chartjs-2";

export default function CustomCharts() {
    const [chartData, setChartData] = useState({
        labels: ["Boston", "Worcester", "Springfield", "Lowel", "Cambridge"],
        datasets: [
            {
                label: "Population",
                data: [117594, 181455, 153060, 106519, 105162],
                backgroundColor: "#303F9F"
                // "#A52885",
                // "#F4888B",
                // "#F39617",
                // "#2EB2A5",
                // "#453187"
            }
        ]
    });

    return (
        <>
            <Typography variant="h6">Bar Chart</Typography>
            <Bar
                data={chartData}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: "Largest cities of Massachusetts"
                        /* fontSize: 25 */
                    },
                    legend: { display: true, position: "bottom" }
                }}
            />
        </>
    );
}
