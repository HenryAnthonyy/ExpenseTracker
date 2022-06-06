import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {

    //Use dynamic styles to fill up the bars
    let barFill = '0%';

    if(props.maxValue > 0){
        barFill = Math.round((props.value / props.maxValue) * 100) + '%';
    }

  return (
    <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{ height: barFill }}></div>
        </div>
        <div className="chart-bar_label">{props.label}</div>
    </div>
  )
}

export default ChartBar