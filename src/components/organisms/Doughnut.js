import React from 'react'
import { Doughnut } from 'react-chartjs-2'
// import "./style.scss";

const DoughnutComponent = ({ ds }) => {
  return (
    <>
      <Doughnut
        options={{
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex]
                var total = dataset.data.reduce(function (
                  previousValue,
                  currentValue
                  // currentIndex,
                  // array
                ) {
                  return previousValue + currentValue
                })
                var currentValue = dataset.data[tooltipItem.index]
                var precentage = Math.floor((currentValue / total) * 100 + 0.5)
                return precentage + '%'
              }
            }
          }
        }}
        data={ds}
      />
    </>
  )
}

export default DoughnutComponent
