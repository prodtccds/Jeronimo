import React from "react";
import './style.css';
import security from "./imgs/security.jpg";
import arch from './imgs/arch.jpg';
import visionhacker from "./imgs/visionhacker.jpg";
import webnavigation from "./imgs/webnavigation.jpg";
import protect from './imgs/protect.jpg';
import test from "./imgs/test.jpg";
import sql from './imgs/sql.jpg';
import kaliLogo from './imgs/kaliLogo.jpg';
import hackterminal from "./imgs/hackterminal.jpg"

 export default function CardBit() {
  return (
    <div className="wrapper">
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
        path="/protecao"
        />

      <Card
        img={kaliLogo}
        title="Tutorial de instalação do Kali Linux"
        description="Aprenda a instalar o melhor SO para Hackers! "
        path="/instalarKali"
      />

    
      <Card
        img={sql}
        title="SQL Injection, o velho conhecido!"
        description="Aprenda a realizar ataques de SQL Injection com ferramentas"
        path="/sql"
      />

      <Card
        img={webnavigation}
        title="Jargões de segurança"
        description="Principais Jargões e termos de de segurança utilizados."
        path="/termos"
      />

      <Card
        img={visionhacker}
        title="Ataques XSS"
        description="Como funcionam os ataque de Cross-Site Scripting"
        path="/xss"
      />

      <Card
        img={hackterminal}
        title="Session Hijacking"
        description="Atacar sessões e sequestramento de dados"
        path="hijacking"
      />

      <Card
        img={arch}
        title="Arquitetura de servidores"
        description="Como funcionam servidores web e seu gerenciamento de serviços"
        path="servidores"
      />
    </div>
  );
}
 function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn"><a href={props.path}>Ver Artigo</a></button>
    </div>
  );
}
