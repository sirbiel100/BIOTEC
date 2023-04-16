AOS.init();

const LanguageMap = {
    'pt-BR': {
        'quem-somos': 'Quem somos',
        'equipe-tecnica': 'Equipe Técnica',
        'servicos': 'Serviços',
        'entre-em-contato':'Entre em contato',
        'Sub-tittle1':'Inovações',
        'Sub-tittle2':'e',
        'Sub-tittle3':'Tecnologia',
        'I1-P1':'Somos uma STARTUP incubada no Polo Tecnológico e Criativo, conhecido também como Polo TeC, da Universidade Federal de Pernambuco (UFPE). A BIOTEC tem capacidade de desenvolver produto ou serviço inovador, voltado para as necessidades de cada cliente, como por exemplo: valorização de resíduos, biomassas, hidrogênio verde, biogás, biofertilizantes.',
        'I1-P2':'Contamos com uma equipe experiente, qualificada, criativa, inovadora e disruptiva, buscando soluções eficientes e resultados consistentes para que nossos clientes possam enfrentar com melhores recursos a luta diárias da competitividade com sustentabilidade.',
        'I2-H3':'Competências',
        'I2-S-LI1':'Engenheira Química (UFPE)',
        'I2-S-LI2':'Doutora/Pesquisadora Industrial',
        'I2-S-LI3':'Diretora P,D&I',
        'I2-S-LI4':'Consultora nas áreas de meio ambiente, qualidade e processos',
        'I2-S-LI5':'Experiência com mais de 20 anos no setor sucroenergético',
        'I2-A-LI1':'Graduado em Engenharia Química (UFPE)',
        'I2-A-LI2':'Especialista em Gestão Ambiental',
        'I2-A-LI3':'Especialista em P&D e Scale-UP',
        'I2-A-LI4':'Experiência no setor sucroenergético',
        'I2-P-LI1':'Mestre em Engenharia Química (UFPE)',
        'I2-P-LI2':'Especialista de processos catalíticos',
        'I2-P-LI3':'Experiência no setor sucroenergético',
    },
    'en': {
        'quem-somos': 'Who we are',
        'equipe-tecnica': 'Technical Team',
        'servicos': 'Services',
        'entre-em-contato':'Be in touch',
        'Sub-tittle1':'Innovations',
        'Sub-tittle2':'and',
        'Sub-tittle3':'Technology',
        'I1-P1':'We are a STARTUP incubated in the Technological and Creative Pole, also known as TeC Pole, of the Federal University of Pernambuco (UFPE). BIOTEC has the capacity to develop innovative product or service, focused on the needs of each customer, such as: waste valorization, biomass, green hydrogen, biogas, biofertilizers.',
        'I1-P2':'We have an experienced, qualified, creative, innovative, and disruptive team, seeking efficient solutions and consistent results so that our clients can face the daily struggle of competitiveness with sustainability with better resources.',
        'I2-H3':'Competences',
        'I2-S-LI1':'Chemical Engineer (UFPE)',
        'I2-S-LI2':'PhD/Industrial Researcher',
        'I2-S-LI3':'R&D&I Director',
        'I2-S-LI4':'Consultant in the areas of environment, quality and processes',
        'I2-S-LI5':'More than 20 years of experience in the sugar industry',
        'I2-A-LI1':'Graduated in Chemical Engineering (UFPE)',
        'I2-A-LI2':'Environmental Management Specialist',
        'I2-A-LI3':'R&D and Scale-Up Specialist',
        'I2-A-LI4':'Experience in the sugar industry',
        'I2-P-LI1':'Master in Chemical Engineering (UFPE)',
        'I2-P-LI2':'Catalysis Process Specialist',
        'I2-P-LI3':'Experience in the sugar industry',
    }
};

function updateLanguage(newLanguage) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = LanguageMap[newLanguage][key];
    })
}

const LanguageButton = document.getElementById('button')

LanguageButton.addEventListener('change', event => {
    const newLanguage = event.target.value;
    updateLanguage(newLanguage);
})

// Menu Hamburguer 

const bttn = document.querySelector('#open-menu')
const navbar = document.querySelector('#nav')

bttn.addEventListener('click', () => {
    navbar.classList.toggle('navbar-toggle')
})