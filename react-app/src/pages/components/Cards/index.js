import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';

import datacenter from './assets/datacenter.jpg'
import devteam from './assets/devteam.jpg'
import sql from './assets/sql.jpg'
import vision from './assets/visionhacker.jpg';
import kaliLogo from "../CardBit/imgs/kaliLogo.jpg";
import hack from './assets/hack.jpg';
import protect from './assets/protect.jpg';
import security from './assets/security.jpg';
import server from'./assets/server.jpg';
import test from './assets/test.jpg';

export default function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={security}
              text='Introdução a segurança e jargões utilizados'
              label='Segurança'
              path='/jargoes'
            />
            <CardItem
              src={server}
              text='Ataques de Session Hijacking'
              label='Ataques'
              path='/session'
            />
          </ul>
          <ul className=''>
            <CardItem
              src= {hack}
              text='SQL Injecition, o principal ataque a principal vulnerabilidade'
              label='Ataques'
              path='/sql'
            />
            <CardItem
              src={protect}
              text='XSS, funcionamento e como se proteger'
              label='Ataques'
              path='/xss'
            />
            <CardItem
              src={kaliLogo}
              text='Aprenda a utilizar o Kali Linux'
              label='Tutoriais'
              path='/instalarKali'
            />

    
          </ul>
        </div>
      </div>
    </div>
  );
}

