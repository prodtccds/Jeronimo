import React from 'react';
import "./styles/style.css";
import Card from '../CardBit';
import PilaresText from "./texts/PilaresText";
import security from '../CardBit/imgs/security.jpg';
import protect from '../CardBit/imgs/protect.jpg';
import webnavigation from '../CardBit/imgs/webnavigation.jpg';

export default function PilaresPage() {
        return (
                <>
                        <div className='wrapper__container'>
                                <div className='text__container'>
                                        <PilaresText />
                                </div>

                                <Card
                                        img={security}
                                        title="SEGURANÇA DA INFORMAÇÃO"
                                        description="Aprenda sobre os principais conceitos da segurança da informação, bem com seus pilares"
                                        path="/pilares"
                                />
                                <Card
                                        img={protect}
                                        title="Proteção"
                                        description="Mecanismos e Ferramentas de proteção web"
                                        path="/hacker"
                                />
                                <Card
                                        img={webnavigation}
                                        title="Jargões de segurança"
                                        description="Principais Jargões e termos de de segurança utilizados."
                                        path="/termos"
                                />
                        </div>
                </>
        )
}