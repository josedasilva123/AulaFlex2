import React from 'react'
import Logo from '../../assets/KenzieLogo.svg'
import './styles.css'

const Footer = () => {
  return (
      <footer className="Footer">
          <div>
            <img src={Logo} alt="Logo"/> 
            <button>#BoraAprender!</button>
          </div>          
      </footer> 
  )
}

export default Footer