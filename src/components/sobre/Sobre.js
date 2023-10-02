import './sobre.css'
import cv from '../../assets/img/cv.pdf';
export const Sobre = () => {
    return (

        <section className='sobre section' id='sobre'>
        <div className='sobre__content container grid'>
            <div className='sobre__content'>

                
                <div className='sobre__text'>
                    <h1 className='sobre__title section__title'>
                        Sobre
                    </h1>

                    
                    <p className='sobre__description'>
                            Desde 2022 me dedico a aprender desenvolvimento web e o mundo da computação.
                    </p> 
                    <p className='sobre__description'> Comecei estudando tecnologias front-end e possuo alguns projetos com o objetivo de praticar meu aprendizado.
                    </p><p className='sobre__description'>  Participei do projeto Elas_Na_Tech da JA Brasil e  estou cursando Análise e Desenvolvimento de Sistemas. 
                    </p> 
                    <p className='sobre__description'> Meu objetivo é aprofundar meus estudos em banco de dados e back-end, pois quero atuar como analista ou administradora de banco de dados e 
                    também ter a possibilidade de começar a carreira como desenvolverdora back-end.
                    </p>

                    <a download="" href={cv} className='button button__flex'>
                    Baixe meu CV <i class="uil uil-arrow-down"></i>                                   
                    </a>
                </div>

                <div className='sobre__img'>
                </div>
                
            </div>
        </div>
    </section>
    );
}