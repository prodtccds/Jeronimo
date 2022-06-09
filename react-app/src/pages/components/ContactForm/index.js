import emailjs from "emailjs-com";
import React from 'react';
import "./style.css";
import {Button} from 'reactstrap';


export default function ContactForm() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_thvvds9', 'template_2jcccaw', e.target, 'exs5vSzofpQbrIfuK')

            .then((result) => {
                alert("Parabens, enviamos um Email de confirmação! 👍");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()


    }
    return (
        <div>
        
            <div className="container__form">
                <h2>Assine Nossa Newsletter</h2>
                <form onSubmit={sendEmail} className="formInput">
                    <div className="values__area">

                        <div className="input__nome__container">
                            <label>Nome</label>
                            <input type="text" autoFocus className="input__item" required placeholder="Nome" name="name" />
                        </div>
                        <div className="input__email__container">
                            <label>Email</label>
                            <input type="email" className="input__item" required placeholder="Seu email" name="email" />
                        </div>
                        <div className="button__container">
                            <Button className="btn__entrar" >
                                Entre Na Newsletter
                            </Button>
                        </div>
                    </div>
                </form>
    </div>
    
        </div>
    )
}

/*
  <input type="submit" className="btn__enviar" value="Entre na Newsletter"></input>
*/