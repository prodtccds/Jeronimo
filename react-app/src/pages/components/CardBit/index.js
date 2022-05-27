import React from "react";
import './style.css';
import security from "./imgs/security.jpg"

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
              img={security}
              title="Simple Risotto"
              description="Fear Risotto no more! This simple recipe is perfect for family dinners."
            />
      
            <Card
              img={security}
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
      