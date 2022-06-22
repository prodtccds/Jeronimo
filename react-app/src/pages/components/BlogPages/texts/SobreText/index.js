import React from 'react';
import logo from "../imgs/logoetec.png"
export default function SobreText () {
        return(
                <>
                        <h3>O projeto Jerônimo tenta concentrar um conteúdo introdutório sobre conceitos de segurança da informação e hacking.</h3>
                        <br/>

                        <p><i>"O site do Jerônimo foi concebido utilizando uma base de projetos com o Framework React do facebook, que utiliza de técnicas com javascripte webpack para otimização de interfaces de usuários. Essas tecnologias combinadas permitiram a criação do nosso site que tem como foco expor conteúdo sobre segurança e hacking em forma de Blog."</i></p>
                        <br/>
                        <p>O projeto foi iniciado durante o perído do curso de Desenvolvimento de Sistemas Modular (2021 - 2022) na ETEC Bento Quirino em Campinas. O projeto serve como proposta de desenvolvimento TCC </p>
                        <img src={logo} />
                </>
        )
}