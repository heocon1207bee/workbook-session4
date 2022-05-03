import React from 'react'
import './styles.css'

const Divine = (props) => {
    const shape = props.shape;
    return (
      <div className={['divComponents',shape].join(' ')} style={{backgroundColor: props.color}}>{props.text}</div>
    )
}

export default Divine