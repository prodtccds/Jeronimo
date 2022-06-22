import React from 'react';

export default function SessionHijackingText() {
        return (
                <div>
                        <br/>
                        <br/>
                           
                       

                        <h2>Session Hijacking, sequestro de sessões</h2>
                        <p>As aplicações atuais utilizam de formas de autenticação bem uniformes e mecanismos conhecidos há bastante tempo. Desenvolver funcionalidades de lembrança de dados para cada usuário em específico utilizando sessions é uma método de desenvolvimento utilizado há bastante tempo, onde dentro de uma aplicação cada usuário cadastrado, quando efetuar autenticação em seu navegador independente de dispositivo, será criado, em uma aplicação utilizando sessions, um identificador único, um SESSION ID, utilizado como cookie de autenticação, que é enviado para o servidor para verificar se o cookie de autenticação já é existente dentro do sistema, e se existente, o usuário é lembrado e conectado sem a necessidade de se autenticar novamente. O Sequestro de sessões consiste na captura de uma sessão ativa e o disparo de uma requisição forçada para o servidor, que não difere qual dispositivo está sendo solicitada a conexão, mas bastando a existência de igualdade na requisição HTTP no Cookie de requisição, bastando que o Hacker capture os Cookies de sessão, utilizando ataque de XSS, SQL Injection ou mesmo Clickjacking.</p> <br/>
                        <p> Um verificador de penetração identifica contas que são permitidos o acesso a sessões com privilégios de alto nível, permitindo o acesso como tempo ilimitado. As ferramentas fornecidas pelo Kali, permitem diversos ataques como, ataque de fixação de sessão, sequestrando sessões de usuários. Além de ataques de Clickjacking, que é uma técnica para induzir usuários a clicarem em algo que pode ser utilizado para revelar informações confidenciais. O Clickjacking funciona com um código incorporado a uma aplicação que quando clicado sequestra informações do usuário em foco, obtidas em forma de sequestro de sessões ou mesmo sequestro de Cookies. Ferramentas com Wireshark ou mesmo Cookie Cadger são bastante úteis para realização de sequestramento de sessões</p>
                                <br/>
                                <br/>

                        <h3> Documentações e materiais</h3>
                        <p><a href="https://crashtest-security.com/session-hijacking-prevention/">Crash-test Security</a></p>
                        <p><a href="https://www.geeksforgeeks.org/session-hijacking/">GeeksforGeeks Session Hijacking</a></p>
                        <p><a href="https://owasp.org/www-community/attacks/Session_hijacking_attack">OWASP session hijacking documentation</a></p>
                                <br/>
                                <br/>
                                <h4>Relacionados</h4>
                                <hr/>
                                <br/>
                        </div>
                        )
}