import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/fabio-alexandre-de-sousa-40b2703b/" className="footer__social-link" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/fabioalexandre1911" className="footer__social-link" target="_blank">
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/fabioalexandre.sousa/" className="footer__social-link" target="_blank">
                    <FaInstagram />
                </a>
            </div>

            <p className="footer__copyright text-cs">
                &copy; 2024 <span>Fábio</span>. Todos os direitos Reservados
            </p>

            <p className="footer__copyright text-cs">
                Desenvolvido por <span>Fábio Sousa</span>
            </p>
        </div>
    </footer>
    );
};

export default Footer;