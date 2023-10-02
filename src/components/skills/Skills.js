import './skills.css';

export const Skills = () => {
    return (
        <section className='skills section' id='skills'>
        <div className='skills__content container grid'>
            <div className='skills__content'>

                
                <div className='skills__text'>
                    <h1 className='skillls__title section__title'>
                        Skills
                    </h1>

                    <h3 className='skills__name '>
                        Hard Skills
                    </h3>


                    <div className='skills__tec'>
                    
                        <i class="uil uil-check skills__icon"> Html </i>
                        <i class="uil uil-check skills__icon"> CSS </i>
                        <i class="uil uil-check skills__icon"> JavaScript </i>
                        <i class="uil uil-check skills__icon"> React </i>
                    
                        <i class="uil uil-check skills__icon"> Java </i>
                        <i class="uil uil-check skills__icon"> Git  </i> 

                        <i class="uil uil-check skills__icon">Relational Database </i>              
                        <i class="uil uil-check skills__icon">SQL </i>
                                        

                    </div>

                    <h3 className='skills__name'>
                        Soft Skills
                    </h3>
                    <div className='skills__tec'>
                    
                        <i class="uil uil-check skills__icon"> Organizada </i>
                        <i class="uil uil-check skills__icon"> Analítica </i>
                        <i class="uil uil-check skills__icon"> Líder   </i>
                        <i class="uil uil-check skills__icon"> Participativa  </i>
                        <i class="uil uil-check skills__icon"> Comunicativa  </i>  
                        <i class="uil uil-check skills__icon"> Autodidata    </i>       

                    </div>                    
                </div>
            </div>
        </div>
    </section>
    );
}