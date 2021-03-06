import React from 'react';
import './style.css';


export default function relativeCard({img, title, description, path}) {
        return (
                <div className="card">
                <div className="card__body">
                  <img src={img} class="card__image" />
                  <h2 className="card__title">{title}</h2>
                  <p className="card__description">{description}</p>
                </div>
                <button className="card__btn"><a href={path}>Ver Artigo</a></button>
              </div>
        )
}