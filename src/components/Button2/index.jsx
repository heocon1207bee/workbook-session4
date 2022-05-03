import React from 'react'
import './styles.css'

const Button2 = (props) => {

  const onClick = () => {
    alert(`${props.text}`)
  }

  return (
    <div>
        <button className='changeBtn' onClick = {onClick} > {props.text} </button>
    </div>
  )
}

export default Button2