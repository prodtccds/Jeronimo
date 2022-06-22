import React from "react";
import sqlum from "../imgs/sql1.png";
import querysql from "../imgs/querysql.png";
export default function SQLInjectionText () {
        return(
                <>
                <br/>
                <br/>

                <h2> SQL Injection, a clássica Vulnerabilidade</h2>
                <br/>
                <p> O SQL Injection é uma vulnerabilidade muito conhecida e antiga dentro do desenvolvimento de software, contudo, continua a ser frequentemente encontrado em grande amplitude nos dias atuais. Em suma, um SQL Injection, consiste em um tipo de ataque onde o atacante insere um comando SQL personalizado através de uma entrada de dados disponível na aplicação, ou por url. Como grande parte das aplicações web ou desktop, precisam manter as informações dos usuários armazenadas em bases de dados, SGBDs são requeridas, e as mais tradicionais utilizam o modelo relacional de dados, que em sua maioria, fazem o uso do SQL, e Grandes SGBDs como PostgreSQL, SQL Server, MySQL DB2 e MariaDB, tornam a sintaxe SQL cada vez mais universalizada. Existem dois tipos de procedimentos envolvendo comandos SQL comuns. Instruções estáticas e instruções dinâmicas, sendo uma instrução SQL detentora de parâmetros, de maneira lógica, quase sempre requisitará uma inserção desses parâmetros para realizar a rotina em que se insere.</p>
                <br/>
                <img src={sqlum}/>
                <p>Quando uma instrução SQL tem os valores de pesquisa concatenados com esses valores inseridos pelo usuário, o usuário será redirecionado para dentro da aplicação, significando que o ataque SQL Injection foi bem sucedido</p>
                <br/>
                <img src={querysql}/>
                <p> Muitas vezes, features de login utilizam dessas instruções dinâmicas para realizar a consulta dinâmica, onde o valor inserido pelo usuário é concatenado em uma SQL query. Isso é exatamente o que acaba gerando a vulnerabilidade, onde o usuário pode utilizar das entradas do sistemas para inserir uma instrução SQL qualquer.
    Uma possível solução para a prevenção simples de ataques SQL Injection é a validação e tratamento dos valores obtidos por meio de inserção do usuário. Existem técnicas específicas para sistemas de conexão com banco de dados que utilizam o paradigma da orientação a objetos, como o ORM (Object Relational Mapping), a técnica consiste em reduzir ao máximo vulnerabilidades no sistema CRUD, ondes tabelas do banco de dados são representadas através de classes e os registros de cada tabela são representados como instâncias das classes correspondentes. Com esta técnica, não é necessário se preocupar com os comandos em linguagem SQL, já que será utilizada uma interface de programação simples que faz todo o trabalho de persistência. </p>
                <br/>
                <br/>

                <h3> Documentações e material guia para estudo</h3>
                <p><a href="https://hdivsecurity.com/docs/sql-injection/">hdivsecurity SQL Injection Documentation</a></p>
                <p><a href="https://www.hacksplaining.com/exercises/sql-injection#/introducing-log">Aprenda Jogando</a></p>
                <br/>
                <br/>
                <hr/>
                <h4>Relacionado</h4> 
                </>
        );
}