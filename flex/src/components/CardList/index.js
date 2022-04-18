import React from 'react'
import CardExample from './CardExample'
import './styles.css'
import Foto1 from '../../assets/Foto1.jpg';
import Foto2 from '../../assets/Foto2.jpg';
import Foto3 from '../../assets/Foto3.jpg';
const CardList = () => {
  return (
    <ul className='cardList'>
        <CardExample image={Foto1} title="10 dicas sobre CSS" />
        <CardExample image={Foto2} title="O segredo místico do flex-box" />
        <CardExample image={Foto3} title="Como fazer a diagramação perfeita" />
        <CardExample image={Foto1} title="Porque a prática é melhor maneira de evoluir" />
        <CardExample image={Foto2} title="3 bibleotecas que você precisa conhecer" />
    </ul>
  )
}

export default CardList