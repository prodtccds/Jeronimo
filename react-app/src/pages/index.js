import React from 'react';
import Cards from './components/Cards';
import Escdois from './assets/escrevendodois.mp4';
import "./styles/home.css";



export default function Home() {
        return (
                <div className='hero-container' >
                        <div className='background__area'>
                                <video src={Escdois} autoPlay loop muted />
                                
                                <h1 >SEJA UM HACKER</h1>
                                <h3>Fique por dentro dos principais conceitos de segururança e web hacking!</h3>
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
                                <Cards />
                        </div>


                </div>
        );
}



