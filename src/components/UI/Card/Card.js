import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="Card" style={{width: props.width ? props.width:"100%"}} {...props}>
            {props.children}
        </div>
    )
}

export default Card
