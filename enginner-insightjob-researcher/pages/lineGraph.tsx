import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import React from "react";
Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

const randomNumbersArray = (): number[] => {
    const maxNum = 1000
    const minNum = 0
    const ary = [...Array(12)]
    return ary.map(() => Math.floor( Math.random() * (maxNum+ 1 - minNum) ) + minNum)
};

const data ={
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
        {
            label: "number of job insight",
            backgroundColor: "#008080",
            borderColor: "#7fffd4",
            pointBorderWidth: 10,
            data: [...randomNumbersArray()]

        }
    ]
}


const LineGraph: React.VFC = () => {
    return(
        <Line data={data} />
    )
}

export default LineGraph