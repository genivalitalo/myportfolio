import React from 'react'
import './Footer.css'
import LogoFooter from "C:/projetos_frontend/myportfolio/src/assets/Logo.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container_footer">
            <div className="logo_footer">
                <div className="info_footer">
                    <img src={LogoFooter} alt="logo" />
                    <h2 className="logo_text_footer">Genival Italo</h2>
                </div>
                <p className="description_footer">Se você chegou até aqui, muito obrigado!</p>
            </div>
            <div class="flex_links">
                <div className="container_links">
                    <h4 className="text_links_footer">Links</h4>
                    <a href="#inicio" className="link_footer">Início</a>
                    <a href="#sobre" className="link_footer">Sobre Mim</a>
                    <a href="#projetos" className="link_footer">Meus Projetos</a>
                    <a href="#skills" className="link_footer">Minhas Skills</a>
                    <a href="#contato" className="link_footer">Contato</a>
                </div>
                <div className="container_links">
                    <h4 className="text_links_footer">Redes Sociais</h4>
                    <a href="#inicio" className="link_footer">GitHub</a>
                    <a href="#sobre" className="link_footer">Linkedin</a>
                    <a href="#projetos" className="link_footer">Facebook</a>
                    <a href="#skills" className="link_footer">Instagram</a>
                </div>
            </div>
            <div className="container_form">
                <h4 className="text_links_footer">Fale comigo:</h4>
                <form id='form_footer' action="">
                    <input type="text" placeholder='Seu Nome...' required />
                    <input type="email" placeholder='Seu Email...' required />
                    <button className='btn_form'>Enviar</button>
                </form>
            </div>
        </div>
        <p className="direitos">Todos os Direitos Reservados.</p>
    </footer>
  )
}
export default Footer;
