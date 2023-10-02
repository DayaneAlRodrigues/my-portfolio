import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contato.css';

export const Contato = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_29f9lqk', 'template_fyfi2ug', form.current, 'hW2Q1naaO2LiAisLI')
      e.target.reset();
  };

    return(
        <section className='contato section' id='contato'>
            <h2 className='section__title'>Contato</h2>
            <span className='section__subtitle'>Fale comigo</span>

            <form ref={form} onSubmit={sendEmail} className='contato__form'>
                <div className='contato__form-div'>
                    <label className='contato__form-label'>Nome</label>
                    <input type='text' name='nome' className='contato__form-input'
                    placeholder='Digite o seu nome'/>
                </div>

                <div className='contato__form-div'>
                    <label className='contato__form-label'>Email</label>
                    <input type='email' name='email' className='contato__form-input'
                    placeholder='Digite o seu email'/>
                </div>

                <div className='contato__form-div'>
                    <label className='contato__form-label  contato__form-label-area'>Mensagem</label>
                    <textarea name='mensagem' col='30' rows='10'
                    className='contato__form-input contato__form-area' placeholder='Escreva sua mensagem'></textarea>
                </div>

                <button className='button button__flex'>Enviar<i class="uil uil-fast-mail button__icon button__icon_contato"></i></button>
            </form>
        
        </section>
    );
}