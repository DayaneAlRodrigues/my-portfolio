import './footer.css';

export const Footer = () => {
    return (
        <section className='section footer'>


        <div className="footer__social">
            <a href="https://github.com/DayaneAlRodrigues" className="footer__social_icon" target="__blank">
            <i class="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/dayane-de-almeida-rodrigues-067063219/" className="footer__social_icon" target="__blank">
            <i class="uil uil-linkedin-alt"></i>
            </a>

            <i class="uil uil-copyright">Dayane Rodrigues</i>
        </div>

        <a href='#home' className='footer__up'><i class="uil uil-arrow-up"></i></a>

        
        </section>
    );
}