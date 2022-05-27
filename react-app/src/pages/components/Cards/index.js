import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';

import datacenter from './assets/datacenter.jpg'
import devteam from './assets/devteam.jpg'
import sql from './assets/sql.jpg'
import vision from './assets/visionhacker.jpg';
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
              path='/seguranca'
            />
            <CardItem
              src={server}
              text='Funcionamento de servidores Web'
              label='Servidores'
              path='/seguranca'
            />
          </ul>
          <ul className=''>
            <CardItem
              src= {hack}
              text='Principais Vulnerabilidades'
              label='Vulnerabilidades'
              path='/vulnerabilidades'
            />
            <CardItem
              src={protect}
              text='Mecanismos de Defesa e Ataque'
              label='Ferramentas'
              path='/vulnerabilidades'
            />
            <CardItem
              src={test}
              text='Testes de invasão com o kali linux'
              label='Testes'
              path='/testes'
            />

    
          </ul>
        </div>
      </div>
    </div>
  );
}

