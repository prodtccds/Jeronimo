import React from 'react';
import xssexample from '../imgs/exemploxss.jpg';
import xssexampletwo from '../imgs/examplaxss.png';
import hexadecimalimg from '../imgs/hexadecimal.png';
export default function XssText() {
        return (
                <>
                <br/>
                <br/>
                        <h2> Cross-Site Scripting</h2>
                        <br />
                        <p>Os ataques de XSS, são um tipo de Code Injection, onde um script malicioso é injetado em sites obtidos como funcionais. Os ataques XSS ocorrem quando um invasor usa um aplicativo da web para enviar o código malicioso , geralmente na forma de um script do lado do navegador, para um usuário final diferente. As vulnerabilidades permitem que esses ataques sejam bem-sucedidos, são bastante difundidas e ocorrem em qualquer lugar em que uma aplicação web usa a entrada de um usuário em uma saída, sem utilização de codificação ou validação. Aplicações web com blogs, redes sociais ou qualquer site que permite que o usuário adicione conteúdo ao site para personalização individual, ou seja, trechos de HTML e CSS. Sites assim são alvos frequentes de hackers ou script kiddies, que utilizam de brechas e vulnerabilidades para inserir código dentro da aplicação. Esse código injetado pode colher dados de usuários que acreditam que estão simplesmente disponibilizando dados para a aplicação de maneira confiável.
                                Assim como o SQL Injection, o XSS procede da vulnerabilidade que consiste no não tratamento de inputs e seus respectivos valores inseridos pelos usuários. Entretanto, os ataques XSS não utilizam da injeção de instruções SQL, e sim uma injeção de conteúdo diretamente na aplicação, geralmente com Javascript, para executar comandos javascript, mudar a UI, modificar sessions e alterar o conteúdo visível para o usuário.
                        </p>
                        <br />
                        <img src={xssexample}/>
                        <br />
                        <p> Outro fator sobre códigos javascript para realização de ataques XSS, mesmo que haja um mecanismo que inibe a incrementação de código javascript pelo cliente na aplicação, existem formas bem triviais e convencionais para blindar o código javascript de ser detectados por mecanismos de defesa. Um deles consiste em inserir o código javascript em atributos de elementos HTML.</p>
                        <img src={xssexampletwo}/>
                        <p> Além desse tipo de inserção, existem outras vias, como converter o código javascript em hexadecimal, tendo como ideia mascarar esse código javascript para que algoritmos de tratamento de XSS não consigam detectar a presença de sintaxe javascript, e, ainda sim, o navegador interpreta esse código javascript escrito em hexadecimal normalmente.  </p>
                        <img src={hexadecimalimg}/>
                        <br/>
                        <br/>
                        <h3>Teste seus conhecimento Em sites abaixo: </h3>
                        <p><a href='https://xss-game.appspot.com/' target="__BLANK">XSS GAME</a></p>
                        <p><a href='https://owasp.org/www-project-webgoat/' target="__BLANK">OWASP Webgoat</a></p>
                        <p><a href='https://alf.nu/alert1?world=alert&level=alert0' target="__BLANK">ALERT TO WIN</a></p>


                        <br />
                        <br />
                </>

        )
}