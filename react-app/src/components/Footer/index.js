import React from 'react';
import './footer.css';
import instaIcon from "./imgs/insta.png";
import gitIcon from "./imgs/git.png";
import ContactForm from '../../pages/components/ContactForm';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         Fique por Dentro das notícias sobre o mundo do Hacking!
        </p>
        <p className='footer-subscription-text'>
          Preencha com seu E-mail e enviaremos o acesso!
        </p>
        <div className='input-areas'>
          <ContactForm />
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre </h2>
            <a href='/sobre'>Projeto</a>
            <a href='/sobre'>Equipe</a>
            <a href='/sobre'>Material Referencial</a>
            <a href='/tutoriais'>Indicação de conteúdo</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
        
            <a href='www.github.com/prodtccds' > GitHub</a>
            <a href='https://www.instagram.com/projetojeronimo/'>Instagram </a>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href='/' className='social-logo'>
              JERÔNIMO
              <i class='fab fa-typo3' />
            </a>
          </div>
          <small class='website-rights'>JERÔNIMO © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

