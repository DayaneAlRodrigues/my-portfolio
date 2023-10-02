import './home.css';
import { Social } from './Social';


export const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className='home__content container grid'>
                <div className='home__content'>
                    <Social/>

                    <div className='home__img'>
                    </div>
                    <div className='home__text'>
                        <h1 className='home__title'>
                            Dayane Rodrigues
                        </h1>

                        <h3 className='home__subtitle'>
                            Web developer
                        </h3>

                        <p className='home__description'>
                            JavaScript | SQL | Java 
                        </p>

                        <a href='#contato' className='button button__flex'>
                        Fale comigo <i className="uil uil-message button__icon ">                                   </i>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}