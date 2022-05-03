import React from 'react';
import "./styles/home.css"
import "../App.css";
import programando from "./assets/programando.mp4";




export default function Home() {
        return (
                <div className='hero-container' >

                        <video src={programando} autoPlay loop muted />

                        <h1 >Asssine agora a nossa Newsletter</h1>
                        <h3>Fique por dentro de notícias sobre segurança da informação</h3>
                                <br></br>
                        <div className='hero-btns'>
                                <button className='buttonStarted'>
                                        <a href="/sobre">   INICIAR  </a>
                                </button>
                            
                                <button className='buttonAbout'>
                                <a href="/sobre">   SOBRE O PROJETO  </a>
                                </button>
                        </div>

                </div>


        );
}

