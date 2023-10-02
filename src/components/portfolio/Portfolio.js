import './portfolio.css';
export const Portfolio = () => {
    return (
        <section className='portfolio section' id='portfolio'>
        <div className='portfolio__content container grid'>
            <div className='portfolio__content'>
                <h2 className='portfolio__title section__title'>
                    Portfolio
                </h2>
                <div className='portfolio__list container'>
                    <div className='portfolio__card container'>
                        <a href="https://dayanealrodrigues.github.io/SoLar/" target="__blank">
                        <div className='portfolio__img1'>
                            
                        </div>
                        <h3 className='portfolio__subtitle'>
                            SOLAR
                        </h3>
                        <p className='portfolio__description'>
                            Empresa de energia solar
                        </p>
                        </a>
                    </div>

                    <div className='portfolio__card container'>
                        <a href="https://dayanealrodrigues.github.io/Chocotrufa/index.html" target="__blank">
                        <div className='portfolio__img2'>
                            
                        </div>
                        <h3 className='portfolio__subtitle'>
                            Chocotrufa
                        </h3>
                        <p className='portfolio__description'>
                            Doceria artesanal
                        </p>
                        </a>
                    </div>

                    
                </div>

                <div className='portfolio__list container'>
                    <div className='portfolio__card container'>
                            <a href="https://dayanealrodrigues.github.io/Katie_Bouman/" target="__blank">
                            <div className='portfolio__img3'>
                                
                            </div>
                            <h3 className='portfolio__subtitle'>
                                Katie Bouman
                            </h3>
                            <p className='portfolio__description'>
                                Homenagem 
                            </p>
                            </a>
                        </div>

                        <div className='portfolio__card container'>
                            <a href="https://dayanealrodrigues.github.io/Memory-Game/" target="__blank">
                            <div className='portfolio__img4'>
                                
                            </div>
                            <h3 className='portfolio__subtitle'>
                                Memory Game
                            </h3>
                            <p className='portfolio__description'>
                                Agretsuko 
                            </p>
                            </a>
                        </div>
                    </div>

                    <div className='portfolio__list container'>
                    <div className='portfolio__card container'>
                            <a href="https://dayanealrodrigues.github.io/DinoPula/" target="__blank">
                            <div className='portfolio__img5'>
                                
                            </div>
                            <h3 className='portfolio__subtitle'>
                                Dino Pula
                            </h3>
                            <p className='portfolio__description'>
                                Jogo sem internet
                            </p>
                            </a>
                        </div>

                        <div className='portfolio__card container'>
                            <a href="https://dayanealrodrigues.github.io/praticando-com-Flexbox/" target="__blank">
                            <div className='portfolio__img6'>
                                
                            </div>
                            <h3 className='portfolio__subtitle'>
                                FLex Voyage
                            </h3>
                            <p className='portfolio__description'>
                                landing page 
                            </p>
                            </a>
                        </div>
                    </div>
                
                
               
            </div>
        </div>
    </section>
    );
}