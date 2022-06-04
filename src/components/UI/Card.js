import React from 'react'
import './Card.css'

const Card = (props) => {

    // In order to make sure that any className css styles used on the 
    // card custom component work we should add 'props.className' which are the classes from outside
    // to the already existing classNames on the 'card' class

    const classes = 'card ' + props.className

  return (
    <div className= {classes}>
        {props.children}
    </div>
  )
}

export default Card