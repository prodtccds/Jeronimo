import React from 'react';
import kali1 from "../imgs/kali1.png";
import kali2 from "../imgs/kali2.png";
import kali3 from "../imgs/kali3.png";
import kali4 from "../imgs/kali4.png"
import kali5 from "../imgs/kali5.png";
import kali6senha from "../imgs/kali6senha.png";
import kali7arch from "../imgs/kali7arch.png";

export default function KaliLinuxText (){
        return (
                <div>
                        <br/>
                        <br/>
                           
                       

                        <h2>Tutorial de instalação do Kali Linux <i class="fa fa-linux" aria-hidden="true"></i></h2>
                                <br/>
                                <p>Um <b>ISO</b> é um arquivo que é uma cópia dos dados que você encontraria em um DVD de instalação, incluindo o sistema de arquivos. Portanto, se você tivesse um disco para instalar o Kali Linux e fizesse uma cópia que pudesse usar para instalá-lo, essa cópia seria um arquivo ISO.  </p>
                                <br/>
                                <p><b>1.</b>  Vá para a página Kali Linux Downloads da Offensive Security e selecione o download certo para você. Estaremos usando o instalador Kali Linux de 64 bits, você pode gravar a ISO num pendrive de Boot ou DVD.</p>
                                 <br/>
                                 <p><b>2.</b> Inicie o dispositivo no qual você está instalando o Kali Linux. Se você fez um USB ou DVD inicializável, certifique-se de inseri-lo primeiro. Em alguns momentos, o instalador do Kali Linux aparece. Para iniciantes, selecione Instalação gráfica . </p>
                                <img src={kali1}/>
                                <br/>

                                <p><b>3.</b>Selecione um idioma e, em seguida, Continue</p>
                                <img src={kali3}/>
                                <br/>

                                <p><b>4.</b> Selecione o fuso horário do local onde sua máquina reside</p>
                                <img src={kali4}/>
                                <br/>

                                <p><b>5.</b> Selecione o idioma do teclano e em seguida, a ISO será detectada e montada </p>
                                <img src={kali5}/>
                                <br/>

                                <p><b>6.</b> Em seguida, serão requeirdos um usuário e senha, para acesso posterior</p>
                                <img src={kali6senha}/>
                                <br/>

                                <p><b>7.</b> Após, se deve configurar o fuso horário e particionamento de disco, será solicitados a escolha de quais ferramentas o Kali deve conter, como GNONE, Default, xfce e outros.  Selecione com toda a certeza o tipo de pré configuração de ambiente que deseja utilizar no Kali Linux   </p>
                               <img src={kali7arch}/>
                                <br/>

                                <p><b>8.</b> Em seguida, o Kali Linux será instalado e seu login será solicitado.<b>Veja logo em baixo desse item, o manual do Kali Linux e suas ferramentas fornecidos pelos desenevolvedores do sistema!</b></p>
                                <br/>
                                <br/>

                        <h3> Documentações e materiais</h3>
                        <p><a href="https://www.kali.org/docs/">Documentação Kali Linux</a></p>
                        <p><a href="https://www.kali.org/tools/">Ferramentas Do Kali Linux</a></p>
                        
                                <br/>
                                <br/>
                                <h4>Relacionados</h4>
                                <hr/>
                                <br/>
                        </div>
                        )
}