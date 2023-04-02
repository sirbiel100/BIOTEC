AOS.init();

const LanguageMap = {
    'pt-BR': {
        'quem-somos': 'Quem somos',
        'equipe-tecnica': 'Equipe Técnica',
        'servicos': 'Serviços',
        'entre-em-contato':'Entre em contato'
    },
    'en': {
        'quem-somos': 'Who we are',
        'equipe-tecnica': 'Technical Team',
        'servicos': 'Services',
        'entre-em-contato':'Be in touch'
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