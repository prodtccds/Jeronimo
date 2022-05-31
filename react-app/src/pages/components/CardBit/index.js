import React from "react";
import './style.css';
import security from "./imgs/security.jpg";
import arch from './imgs/arch.jpg';
import datacenter from './imgs/datacenter.jpg';
import devteam from './imgs/devteam.jpg';
import visionhacker from "./imgs/visionhacker.jpg";
import development from "./imgs/development.jpg";
import webnavigation from "./imgs/webnavigation.jpg";
import hack from './imgs/hack.jpg';
import protect from './imgs/protect.jpg';
import server from './imgs/server.jpg'
import test from "./imgs/test.jpg"
import sql from './imgs/sql.jpg'
import hacktemplate from "./imgs/hacktemplate.jpg";
import hackterminal from "./imgs/hackterminal.jpg"

export default function CardBit() {
  return (
    <div className="wrapper">
      <Card
        img={security}
        title="SEGURANÇA DA INFORMAÇÃO"
        description="Aprenda sobre os principais conceitos da segurança da informação, bem com seus pilares"
        path="/hacker"
      />

      <Card
        img={protect}
        title="Proteção"
        description="Mecanismos e Ferramentas de proteção web"
        path="/hacker"
        />

      <Card
        img={test}
        title="Tutorial de instalação do Kali Linux"
        description="Aprenda a instalar o melhor SO para Hackers! "
        path="/tutoriais"
      />

      <Card
        img={server}
        title="Tipos de Criptografia"
        description="Leia sobre as bases da criptografia, para entender sua evolução até os dias atuais"
        path="/hacker"
      />

      <Card
        img={sql}
        title="Vulnerabilidades na Web"
        description="As principais vulnerabilidades em ambiente web"
        path="/hacker"
      />

      <Card
        img={webnavigation}
        title="Jargões de segurança"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />

      <Card
        img={visionhacker}
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />

      <Card
        img={hackterminal}
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />

      <Card
        img={arch}
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
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
      <button className="card__btn">Ver Artigo</button>
    </div>
  );
}
