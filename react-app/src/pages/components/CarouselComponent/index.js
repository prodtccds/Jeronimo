import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import imgUm from '../CardBit/imgs/arch.jpg';


export default function CarouselComponent() {
        return (
                        <Carousel>
                                <div>
                                        <img src={imgUm} />
                                        <p className='legend'> Legenda 1</p>
                                </div>

                                <div>
                                        <img src={imgUm} />
                                        <p className='legend'> Legenda 2</p>
                                </div>

                                <div>
                                        <img src={imgUm} />
                                        <p className='legend'> Legenda 3</p>
                                </div>
                        </Carousel>
        )
}