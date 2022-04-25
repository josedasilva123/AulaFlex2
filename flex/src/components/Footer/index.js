import React from 'react'
import Logo from '../../assets/KenzieLogo.svg'
import './styles.css'
import { ThemeButton } from '../../styles/GlobalComponents'

const Footer = () => {
  return (
      <footer className="Footer">
          <div>
            <img src={Logo} alt="Logo"/> 
            <ThemeButton>#BoraAprender!</ThemeButton>
          </div>          
      </footer> 
  )
}

export default Footer