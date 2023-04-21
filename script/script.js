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
        'I2-P1':'Animação',
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
        'I3-QUA-H2':'Qualidade e melhoria contínua',
        'I3-QUA-LI-01':'Controle Estatístico de Processos - CEP',
        'I3-QUA-LI-02':'Implementação de Programa 5S',
        'I3-QUA-LI-03':'Qualidade de Matéria-Prima',
        'I3-QUA-LI-04':'Implementação de Programa de Ideias',
        'I3-SIS-H2':'Sistema de gestão',
        'I3-SIS-LI-01':'Planejamento e Implementação de Sistema de Gestão de Meio Ambiente - ISO 14001:2015',
        'I3-SIS-LI-02':'Planejamento e Implementação de Sistema de Gestão da Qualidade - ISO 9001:2015',
        'I3-SIS-LI-03':'Planejamento e Implementação de Sistema de Gestão da Segurança de Alimentos - ISO 22000:2019',
        'I3-SIS-LI-04':'Auditorias Internas de SGQ, SGA e SGSA',
        'I3-SIS-LI-05':'Desenvolvimento e Realização de Treinamentos para Capacitação',
        'I3-PRO-H2':'Projetos de inovações tecnológicas',
        'I3-PRO-LI-01':'Valorização de Biomassas',
        'I3-PRO-LI-02':'Biogás',
        'I3-PRO-LI-03':'Hidrogênio Verde',
        'I3-PRO-LI-04':'Biofertilizantes',
        'I3-PRO-LI-05':'Créditos de Carbono',
        'I3-PRO-LI-06':'Bioetanol',
        'I3-MEI-H2':'Meio Ambiente e sustentabilidade',
        'I3-MEI-LI-01':'Consultoria Ambiental Estratégica',
        'I3-MEI-LI-02':'Gerenciamento de Resíduos',
        'I3-MEI-LI-03':'Licenciamento Ambiental',
        'I3-MEI-LI-04':'Compostagem e Vermicompostagem',
        'I3-MEI-LI-05':'Reportes Ambientas para Órgãos Governamentais (IBAMA, CPRH)',
        'I3-MEI-LI-06':'Auditoria Ambiental',
        'I3-MEI-LI-07':'P&D em reaproveitamento de resíduos',
        'I3-MEI-LI-08':'Estudo e Relatório de Impacto Ambiental - EIA/RIMA',
        'I3-MEI-LI-09':'Relatório Ambiental Preliminar - RAP',
        'I3-MEI-LI-10':'Estudos e Remediação de Áreas Contaminadas',
        'I3-MEI-LI-11':'Planos de Manejo de Meio Ambiente',
        'I3-MEI-LI-12':'Projetos de Sustentabilidade Ambiental',
        'I3-MEI-LI-13':'Mecanismo de Desenvolvimento Limpo',
        'I3-MEI-LI-14':'Educação Ambiental para Empresas',
        'I3-MEI-LI-15':'Estudos Ambientais',
        'I3-MEI-LI-16':'Plano de Gerenciamento de Resíduos Sólidos - PGRS',
        'I3-MEI-LI-17':'Plano de Recuperação de Áreas Degradadas - PRAD',
        'I3-MEI-LI-18':'Tratamento de Efluentes',
        'I3-MEI-LI-19':'Tratamento de Água',
        'I3-MEI-LI-20':'Laudos Ambientais (Análise de Ar, Solo e Água)',
        'I3-MEI-LI-21':'Desenvolvimento e Realização de Treinamento para Capacitação',
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
        'I2-P1':'Animation',
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
        'I3-QUA-H2':'Quality and continuous improvement',
        'I3-QUA-LI-01':'Statistical Process Control - SPC',
        'I3-QUA-LI-02':'5S Program Implementation',
        'I3-QUA-LI-03':'Raw Material Quality',
        'I3-QUA-LI-04':'Idea Program Implementation',
        'I3-SIS-H2':'Management System',
        'I3-SIS-LI-01':'Planning and Implementation of Environmental Management System - ISO 14001:2015',
        'I3-SIS-LI-02':'Quality Management System Planning and Implementation - ISO 9001:2015',
        'I3-SIS-LI-03':'Food Safety Management System Planning and Implementation - ISO 22000:2019',
        'I3-SIS-LI-04':'Internal audits of QMS, WMS and HSEMS',
        'I3-SIS-LI-05':'Development and Realization of Training for Capacity Building',
        'I3-PRO-H2':'Technological innovation projects',
        'I3-PRO-LI-01':'Biomass Valorization',
        'I3-PRO-LI-02':'Biogas',
        'I3-PRO-LI-03':'Green Hydrogen',
        'I3-PRO-LI-04':'Biofertilizers',
        'I3-PRO-LI-05':'Carbon Credits',
        'I3-PRO-LI-06':'Bioethanol',
        'I3-MEI-H2':'Environment and sustainability',
        'I3-MEI-LI-01':'Strategic Environmental Consulting',
        'I3-MEI-LI-02':'Residue Management',
        'I3-MEI-LI-03':'Environmental Licensing',
        'I3-MEI-LI-04':'Composting and Vermicomposting',
        'I3-MEI-LI-05':'Environmental Reports for Governmental Agencies (IBAMA, CPRH)',
        'I3-MEI-LI-06':'Environmental Auditing',
        'I3-MEI-LI-07':'R&D on waste reuse',
        'I3-MEI-LI-08':'Study and Environmental Impact Report',
        'I3-MEI-LI-09':'Preliminary Environmental Report',
        'I3-MEI-LI-10':'Studies and Remediation of Contaminated Areas',
        'I3-MEI-LI-11':'Environmental Management Plans',
        'I3-MEI-LI-12':'Environmental Sustainability Projects',
        'I3-MEI-LI-13':'Clean Development Mechanism',
        'I3-MEI-LI-14':'Environmental Education for Companies',
        'I3-MEI-LI-15':'Environmental Studies',
        'I3-MEI-LI-16':'Solid Waste Management Plan',
        'I3-MEI-LI-17':'Degraded Areas Recovery Plan',
        'I3-MEI-LI-18':'Effluent Treatment',
        'I3-MEI-LI-19':'Water Treatment',
        'I3-MEI-LI-20':'Environmental Reports (Air, Soil and Water Analysis)',
        'I3-MEI-LI-21':'Development and Realization of Training for Capacity Building',
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

// Animation Cards 

const cardsButton = document.querySelector('#animation-button');
const santulla = document.querySelector('#santulla')
const adilson = document.querySelector('#adilson')
const paulo = document.querySelector('#paulo')

cardsButton.addEventListener('click', () =>  {
    santulla.classList.toggle('santulla-off')
    adilson.classList.toggle('adilson-off')
    paulo.classList.toggle('paulo-off')
})