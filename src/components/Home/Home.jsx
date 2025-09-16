import React from 'react';
import './home.css';
import profile from '../../assets/profile-img_.png'
import shapeOne from '../../assets/icon-react.png';
import shapetwo from '../../assets/icon-js.png';
import shapethree from '../../assets/icon-node.png';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import CV from '../../assets/curriculo.pdf'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Olá, <span>Meu nome é</span>
                </p>

                <h1 className="home__title text-cs"><span>FÁBIO</span> SOUSA</h1>

                <p className="home__job">
                    <span className="text-cs">Eu sou um</span> <b>Desenvolvedor Web</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profile} alt="Minha imagem de perfil" className="home__profile" />
                    </div>

                    <p className="home__data home__data-one">
                        <span className="text-lg">
                            2 <b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                            Anos de <span>experiência</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg">30</span>

                        <span className="text-sm text-cs">
                            Projetos <span>Concluídos</span>
                        </span>
                    </p>

                    <img src={shapeOne} alt="" className="shape shape__1"/>
                    <img src={shapetwo} alt="" className="shape shape__2"/>
                    <img src={shapethree} alt="" className="shape shape__3"/>
                </div>

                <p className="home__text">
                    Sou natural de São Paulo, graduado em Análise de Desenvolvimento de Sistemas, um apaixonado por tecnologia e desenvolvimento Web, atualmente venho evoluindo minhas skills no front-end com React e também venho me especializando em Designer UX/UI.
                </p>

                <div className="header__socials">
                    <a href="https://www.linkedin.com/in/fabio-alexandre-de-sousa-40b2703b/" className="header__social-link" target="_blank">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/fabioalexandre1911" className="header__social-link" target="_blank">
                        <FaGithub />
                    </a>

                    <a href="https://www.instagram.com/fabioalexandre.sousa/" className="header__social-link" target="_blank">
                        <FaInstagram />
                    </a>
                </div>

                <div className="home__btns">
                    {/* <a download="" href={CV} className="btn text-cs">Dowload CV</a> */}
                    {/* <a href="" className="btn text-cs">Dowload CV</a> */}
                    <a href="#skills" className="hero__link text-cs">Minhas Skills</a>
                </div>
            </div>

            <div className="section__deco deco__left"></div>
        </div>
    </section>
  );
};

export default Home;