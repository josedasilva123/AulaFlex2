import React from 'react'
import './styles.css';

const CardExample = ({title, image, className}) => {
  return (
    <li className={"CardExample-li " + className}>
        <img src={image} alt={title}/>
        <div>
          <h3>{title}</h3>
        </div>
    </li>
  )
}

export default CardExample