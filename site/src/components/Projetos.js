import React from 'react'
import './Projetos.css'
import FtProjetos1 from 'C:/projetos_frontend/myportfolio/site/src/assets/sitemundo.png'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Projetos = () => {
  return (
    <section className="projetos">
        <h2 className="text_projetos">Meus Projetos</h2>
        <p className="p_projeto">Aqui você encontrará uma seleção dos meus trabalhos mais recentes e notáveis. Cada projeto reflete meu compromisso com a criação de soluções digitais inovadoras e centradas no usuário.</p>
        <div className='container_card_projetos'>
            <div className="card_projetos">
                <img id='img_projeto' src={FtProjetos1} alt="projeto" />
                <div className="infos_cardd_projetos">
                    <p className="tecnologias">UI-UX DESIGN / HTML, CSS, JS, REACT</p>
                    <h4 className="nome_projeto">Mundo Technology</h4>
                    <p className="description_projeto">Site da empresa onde eu trabalho, foi feito focado em apresentar de formar objetiva os serviços da empresa.</p>
                    <a href="#" className="acessar_projeto">Acessar <TrendingFlatIcon /></a>
                </div>
            </div>
            <div className="card_projetos">
                <img id='img_projeto' src={FtProjetos1} alt="projeto" />
                <div className="infos_cardd_projetos">
                    <p className="tecnologias">UI-UX DESIGN / HTML, CSS, JS, REACT</p>
                    <h4 className="nome_projeto">Mundo Technology</h4>
                    <p className="description_projeto">Site da empresa onde eu trabalho, foi feito focado em apresentar de formar objetiva os serviços da empresa.</p>
                    <a href="#" className="acessar_projeto">Acessar <TrendingFlatIcon /></a>
                </div>
            </div>
            <div className="card_projetos">
                <img id='img_projeto' src={FtProjetos1} alt="projeto" />
                <div className="infos_cardd_projetos">
                    <p className="tecnologias">UI-UX DESIGN / HTML, CSS, JS, REACT</p>
                    <h4 className="nome_projeto">Mundo Technology</h4>
                    <p className="description_projeto">Site da empresa onde eu trabalho, foi feito focado em apresentar de formar objetiva os serviços da empresa.</p>
                    <a href="#" className="acessar_projeto">Acessar                     <TrendingFlatIcon /></a>
                </div>
            </div>
            <div className="card_projetos">
                <img id='img_projeto' src={FtProjetos1} alt="projeto" />
                <div className="infos_cardd_projetos">
                    <p className="tecnologias">UI-UX DESIGN / HTML, CSS, JS, REACT</p>
                    <h4 className="nome_projeto">Mundo Technology</h4>
                    <p className="description_projeto">Site da empresa onde eu trabalho, foi feito focado em apresentar de formar objetiva os serviços da empresa.</p>
                    <a href="#" className="acessar_projeto">Acessar <TrendingFlatIcon /></a>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Projetos;
