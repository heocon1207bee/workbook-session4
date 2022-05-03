import React from 'react'
import './styles.css'

const Button = (props) => {
  return (
    <div className={props.useTo}>
        <button className='changeBtn' onClick = {props.onClick} > {props.text} </button>
    </div>
  )
}

export default Button