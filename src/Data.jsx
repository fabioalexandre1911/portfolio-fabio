/* ======= Icones Tecnologias =======*/
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery } from 'react-icons/si';

/*======== Import das imagens =======*/
import imagem01 from '/public/edmarcio.jpg'
import imagem02 from '/public/amope.jpg'
import imagem03 from '/public/esa.jpg'
import imagem04 from '/public/erp.jpg'
import imagem05 from '/public/agencia.jpg'
import imagem06 from '/public/advocacia.jpg'


export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Serviços',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Portfolio',
        path: 'portfolio',
    },
    {
        name: 'Resumo',
        path: 'resume',
    },
    {
        name: 'Contato',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Desenvolvimento Web',
        title: 'Front-End',
        description:'Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
    },
    {
        id: 2,
        name: 'Designer',
        title: 'UI Design',
        description:'Desenho interfaces que sejam claras, objetivas e que possam ser intuitivas para o usuário. '
    },
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'Angular',
        image: <SiAngular id='angular' />
    },
    {
        id: 5,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 6,
        name: 'styled-components',
        image: <SiStyledcomponents id='styled' />
    },
    {
        id: 7,
        name: 'jQuery',
        image: <SiJquery id='jquery' />
    },
    {
        id: 8,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
    {
        id: 9,
        name: 'PHP',
        image: <SiNodedotjs id='node' />
    },
    {
        id: 10,
        name: 'Codegniter',
        image: <SiNodedotjs id='node' />
    },
    {
        id: 11,
        name: 'Wordpress',
        image: <SiNodedotjs id='node' />
    },
]

export const projects = [
    {
        id: 1,
        img: imagem01,
        category: 'Javascrit',
        title: 'Website',
        description:
            'Este é um website de Edmárcio Rodrigues, mestre de artes marciais com mais de três décadas de dedicação e paixão por diversas modalidades de luta. Construção com react e sass',
        //codigo: 'https://edmarciorodrigues.com.br/',
        demo: 'https://edmarciorodrigues.com.br/'
    },
    {
        id: 2,
        img: imagem02,
        category: 'Javascript',
        title: 'Website',
        description:
            'Este é um website de cliníca de podologia em Fortaleza! Com vários tipos de tratamentos com profissionais altamente especializadas. Construção com HTML, CSS e JavaScript e Wordpress',
        //codigo: 'https://amopepodologia.com.br/',
        demo: 'https://amopepodologia.com.br/'
    },
    {
        id: 3,
        img: imagem03,
        category: 'HTML/CSS',
        title: 'Website',
        description:
            'O site da escola ESA Escola Infantil utiliza HTML, CSS e JavaScript para criar uma interface dinâmica e responsiva. O site também usa conceitos de API, fetch e async/await consumindo dados da Agenda Edu.',
        codigo: 'https://esaescolainfantil.com.br/',
        demo: 'https://esaescolainfantil.com.br/'
    },
    {
        id: 4,
        img: imagem04,
        category: 'CODGNITER',
        title: 'Erpress',
        description:
            'Sistema de gestão - ERP fácil e descomplicado, atende diversos seguimentos no mercado, tecnologias aplicadas, PHP e MYSQL',
        //codigo: 'https://erp.erpress.com.br/',
        demo: 'https://erp.erpress.com.br/'
    },
    {
        id: 5,
        img: imagem05,
        category: 'Wordpress',
        title: 'Agência',
        description:
            'Site institucional de uma agência de marketing digital, com foco em serviços de SEO, criação de sites e gestão de redes sociais.',
        //codigo: 'https://downloadsistemas.com.br/agencia',
        demo: 'https://downloadsistemas.com.br/agencia'
    },
    {
        id: 6,
        img: imagem06,
        category: 'Wordpress',
        title: 'Advocacia',
        description:
            'Site institucional de um escritório de advocacia, apresentando serviços jurídicos e informações sobre a equipe.',
        //codigo: 'https://downloadsistemas.com.br/advogado/',
        demo: 'https://downloadsistemas.com.br/advogado/'
    },
    
]

export const cv = [
    {
        id: 1,
        title: 'Análise de Desenvolvimento de Sistemas',
        subtitle: 'Faculdade FIC',
        date: '2002 - 2005',
        description:
        'Ingressei na faculdade em setembro de 2002, com o objetivo de se especializar ainda mais na área de TI em uma faculdade com foco em desenvolvimento, desde então tive experiêcia com PHP, JavaScript, lógica de programação e algoritimos, analise e requistos de software e banco de dados.',
        category: 'educacao',
    },
    {
        id: 2,
        title: 'Desenvolvedor PHP',
        subtitle: 'UTD',
        date: '2016 - 2018',
        description:
        'Iniciei meus estudos em junho de 2016 neste curso que é focado na linguagem PHP para o back-end e front-end onde apliquei conhecimentos com javascript, react, bootstrap, jquery, sass e material UI na construção de alguns projetos.',
        category: 'educacao',
    },
    {
        id: 3,
        title: 'Desenvolvedor Front-End',
        subtitle: 'Facto Digital',
        date: '2012 - 2022',
        description:
        'Apesar de ter tido algumas experiências com tecnologia anteriores, iniciei de fato meus estudos e transição de carreira em junho de 2022, onde desde então venho realizando alguns projetos front-end.',
        category: 'experiencia',
    },
    {
        id: 4,
        title: 'Desenvolvedor PHP',
        subtitle: 'Itarget Tecnologia',
        date: '2022 - 2025',
        description:
        'Trabalho atualmente com wordpress, na manutenção do setor de websites em projetos com foco em sociedades e eventos corporativos.',
        category: 'experiencia',
    },
]

