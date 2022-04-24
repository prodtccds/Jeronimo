import React from 'react';
import maosescrevendocodigo from "../assets/maosescrevendocodigo.mp4";

export default function Home() {
        return (
                <div className='main-content' >
                        <video src={maosescrevendocodigo} autoPlay loop muted />
                        
                        <div className='content'>
                                <h1>Home</h1>
                                <p>this is a test</p>
                        </div>
                </div>

        );
}
