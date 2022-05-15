import React from 'react';
import "./styles/home.css"
import "../App.css";
import Hud from './assets/Hud.mp4'
import Cards from '../components/Cards';
export default function Home() {
        return (

                <div className='hero-container' >
                        
                        <div className='background__area'>

                        <video src={Hud} autoPlay loop muted />

                        <h1 >Asssine agora a nossa Newsletter</h1>
                        <h3>Fique por dentro de notícias sobre segurança da informação</h3>
                                <br></br>
                        <div className='hero-btns'>
                                <button className='buttonStarted' >
                                        <a href="/sobre">   INICIAR  </a>
                                </button>
                            
                                <button className='buttonAbout'>
                                <a href="/sobre">   SOBRE O PROJETO  </a>
                                </button>
                        </div>
                         </div>
                        
                        <div className='card__wrapper'>
                                <Cards/>
                        </div>

                </div>
        );
}



