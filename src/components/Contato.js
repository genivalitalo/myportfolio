import React from 'react'
import './Contato.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LogoForm from "C:/projetos_frontend/myportfolio/src/assets/Logo.png"


const Contato = () => {
  return (
    <section className='contato'>
        <div className="info_contato">
            <div className="texts">
                <h2 className='text_contato'>Endereço & Contato</h2>
                <p className="p_contato">Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente, uma pergunta ou apenas deseja dizer olá, sinta-se à vontade para entrar em contato.</p>
            </div>
            <div className="cards_contato">
                <div className="cards">
                    <LocationOnOutlinedIcon sx={ {width: '60px', height: '60px', backgroundColor: '#A53DFF', color: '#ffffff', padding: '10px', borderRadius: '6px'} } />
                    <div className="card_info">
                        <p className="name_card">Endereço:</p>
                        <h4 className="value_Card">Custódia-PE 56640-000</h4>
                    </div>
                </div>
                <div className="cards">
                    <EmailOutlinedIcon sx={ {width: '60px', height: '60px', backgroundColor: '#A53DFF', color: '#ffffff', padding: '10px', borderRadius: '6px'} } />
                    <div className="card_info">
                        <p className="name_card">Meu Email:</p>
                        <h4 className="value_Card">italobsilvaa@gmail.com</h4>
                    </div>
                </div>
                <div className="cards">
                    <LocalPhoneOutlinedIcon sx={ {width: '60px', height: '60px', backgroundColor: '#A53DFF', color: '#ffffff', padding: '10px', borderRadius: '6px'} } />
                    <div className="card_info">
                        <p className="name_card">Meu Telefone:</p>
                        <h4 className="value_Card">+55 (87) 99910-0721</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="form_contato">
            <div className="container_logo_form">
                <img src={LogoForm} alt="logo" />
                <h2 className="logo">Genival Italo</h2>
            </div>
            <form action="" method="get">
                <input id='nome' required type="text" placeholder='Nome' />
                <input id='email' type="email" required placeholder='Email' />
                <label htmlFor="">Deixe uma Mensagem:</label>
                <input id='mensagem' type="text" />
                <button className='btn_form'>Enviar</button>
            </form>
        </div>
    </section>
  )
}
export default Contato;