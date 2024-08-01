import React from 'react'
import './Hero.css'
import Ft from 'C:/projetos_frontend/myportfolio/src/assets/ITALO.png'

export const Hero = () => {
  return (
    <section className='hero'>
        <div className="container_ft">
          <img id='ft_genival' src={Ft} alt='Foto'/>
        </div>
        <div className="container_info_hero">
          <div className='intro'>
            <h2>Olá, Eu sou</h2>
            <h1>Genival Italo</h1>
          </div>
          <p className='p_hero'>Sou Dev. <strong>Front-End</strong> e <strong>Webdesigner</strong>. Dedico-me a criar aplicativos web envolventes e esteticamente agradáveis, através de um código meticuloso e um design centrado no usuário. </p>
          <a id='btn_contato' href="" className="btn_contato">Entrar em Contato</a>
          <div className='card_experience'>
            <div className='card'>
              <h4 className='text_card'>2 Anos</h4>
              <p className='p_card_hero'>Experiência</p>
            </div>
            <div className='card'>
              <h4 className='text_card'>28 +</h4>
              <p className='p_card_hero'>Projetos Feitos</p>
            </div>
            <div className='card'>
              <h4 className='text_card'>40</h4>
              <p className='p_card_hero'>Clientes Felizes</p>
            </div>
          </div>
        </div>
    </section>
  )
}
