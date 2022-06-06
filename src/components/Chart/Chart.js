import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const monthValues = props.monthDataPoints.map(monthDataPoint => monthDataPoint.value)
    const maximumFill = Math.max(...monthValues)

  return (
    <div className="chart">
        {props.monthDataPoints.map((monthDataPoint) => (

            <ChartBar 
                key={monthDataPoint.label}
                value={monthDataPoint.value} 
                maxValue={maximumFill}
                label={monthDataPoint.label}
            />
        ))}
    </div>
  )
}

export default Chart