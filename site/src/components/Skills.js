import React from 'react'
import './Skills.css'
import IconHtml from 'C:/projetos_frontend/myportfolio/site/src/assets/html5-logo-240.png'
import IconCss from 'C:/projetos_frontend/myportfolio/site/src/assets/css3-logo-240.png'
import IconJava from 'C:/projetos_frontend/myportfolio/site/src/assets/javascript-logo-240.png'
import IconReact from 'C:/projetos_frontend/myportfolio/site/src/assets/react-logo-240.png'

const Skills = () => {
  return (
    <section className='skills'>
        <h2 className="text_skills">Minhas Skills</h2>
        <p className="p_skills">Conheça um pouco das minhas Skills</p>
        <div className="container_skills">
            <div className="card_skill">
                <img src={IconHtml} alt="logo-html" />
                <div className="info_skill">
                    <h4 className="name_skill">HTML5</h4>
                    <p className="description_skill">Meu primeiro contato no Mundo da Programação foi com HTML.</p>
                </div>
            </div>
            <div className="card_skill">
                <img src={IconCss} alt="logo-html" />
                <div className="info_skill">
                    <h4 className="name_skill">CSS3</h4>
                    <p className="description_skill">É a terceira mais nova versão das famosas Cascading Style Sheets</p>
                </div>
            </div>
            <div className="card_skill">
                <img src={IconJava} alt="logo-html" />
                <div className="info_skill">
                    <h4 className="name_skill">JAVASCRIPT</h4>
                    <p className="description_skill">É uma linguagem de progamação Full-Stack</p>
                </div>
            </div>
            <div className="card_skill">
                <img src={IconReact} alt="logo-html" />
                <div className="info_skill">
                    <h4 className="name_skill">REACT</h4>
                    <p className="description_skill">É um framework JavaScript criado pelo Facebook (atual Meta).</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Skills;
