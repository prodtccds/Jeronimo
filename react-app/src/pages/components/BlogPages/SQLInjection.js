import React from 'react';
import SQLInjectionText from './texts/SQLInjectionText';
import RelativeCard from "../CardBit/relativeCard";
import test from "../CardBit/imgs/test.jpg";
import sql from "../CardBit/imgs/sql.jpg"
import webnavigation from "../CardBit/imgs/webnavigation.jpg";

export default function SQLInjection() {
        return (
                <div>
                        <div className='wrapper__container'>
                                <div className='text__container'>
                                        <SQLInjectionText/>
                                </div>

        <div className="card__area">
        <RelativeCard
        img={test}
        title="Tutorial de instalação do Kali Linux"
        description="Aprenda a instalar o melhor SO para Hackers! "
        path="/instalarKali"
      />

    
      <RelativeCard
        img={sql}
        title="SQL Injection, o velho conhecido!"
        description="Aprenda a realizar ataques de SQL Injection com ferramentas"
        path="/sql"
      />

      <RelativeCard
        img={webnavigation}
        title="Jargões de segurança"
        description="Principais Jargões e termos de de segurança utilizados."
        path="/termos"
      />
                </div>

                        </div>
                </div>
        )
}