import React from 'react'
import './Sobre.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Ft from 'C:/projetos_frontend/myportfolio/src/assets/ITALO.png'

const Sobre = () => {
  return (
    <section id='sobre' className='sobre'>
        <div className="info_sobre">
            <h2 className="text_sobre">Esforço-me para criar <br/> experiências web inesquecíveis.</h2>
            <p className="p_sobre">Projeto e desenvolvo sites, serviços web e lojas online estilosas e modernas para clientes. Minha paixão é criar experiências digitais para o usuário.</p>
            <div className="btn_and_redes">
            <a id='btn_contato' href="#projetos" className="btn_contato">Meus Projetos</a>
            <div className="flex_links">
                <a href="#" className="link_redes">
                    <GitHubIcon sx={{ transition: 'all .3s ease' ,color: '#A53DFF', backgroundColor: '#F6ECFF', padding: '5px', width: '40px', height: '40px', borderRadius: '6px', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.08)', '&:hover': {backgroundColor: '#F2E2FF', scale: '1.2'} }} />
                </a>
                <a href="#" className="link_redes">
                    <LinkedInIcon sx={{ transition: 'all .3s ease' ,color: '#A53DFF', backgroundColor: '#F6ECFF', padding: '5px', width: '40px', height: '40px', borderRadius: '6px', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.08)', '&:hover': {backgroundColor: '#F2E2FF', scale: '1.2'} }} />
                </a>
                <a href="#" className="link_redes">
                    <FacebookIcon sx={{ transition: 'all .3s ease' ,color: '#A53DFF', backgroundColor: '#F6ECFF', padding: '5px', width: '40px', height: '40px', borderRadius: '6px', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.08)', '&:hover': {backgroundColor: '#F2E2FF', scale: '1.2'} }} />
                </a>
                <a href="#" className="link_redes">
                    <InstagramIcon sx={{ transition: 'all .3s ease' ,color: '#A53DFF', backgroundColor: '#F6ECFF', padding: '5px', width: '40px', height: '40px', borderRadius: '6px', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.08)', '&:hover': {backgroundColor: '#F2E2FF', scale: '1.2'} }} />
                </a>
            </div>
            </div>
        </div>
        <div className="img_genival">
        <img id='ft_genival_sobre' src={Ft} alt='Foto'/>
        </div>
    </section>
  )
}

export default Sobre;
