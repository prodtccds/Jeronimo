import React from 'react';
import "./styles/style.css";
import XssText from './texts/XssText';

export default function Xss() {
        return (
                <div>
                        <div className='wrapper__container'>
                                <div className='text__container'>
                                        <XssText/>
                                </div>

                

                        </div>
                </div>
        )
}