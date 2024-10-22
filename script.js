// Datos del contenido
const coursesData = {
    basic: {
        title: "Básico",
        sections: [
            {
                title: "Fundamentos del Inglés",
                subsections: [
                    {
                        title: "Pronombres Personales",
                        content: [
                            "I (yo): I am happy",
                            "You (tú/usted): You are nice",
                            "He (él): He is tall",
                            "She (ella): She is smart",
                            "It (eso): It is sunny",
                            "We (nosotros): We are friends",
                            "They (ellos): They are busy"
                        ]
                    },
                    {
                        title: "Verbo 'to be'",
                        content: [
                            "Presente: am/is/are",
                            "Ejemplos:",
                            "- I am a student",
                            "- She is a teacher",
                            "- They are doctors",
                            "Forma negativa:",
                            "- I am not",
                            "- She is not (isn't)",
                            "- They are not (aren't)"
                        ]
                    }
                ]
            },
            {
                title: "Conversaciones Básicas",
                subsections: [
                    {
                        title: "Saludos y Presentaciones",
                        content: [
                            "Hello! How are you?",
                            "Nice to meet you",
                            "What's your name?",
                            "Where are you from?",
                            "Goodbye / See you later"
                        ]
                    }
                ]
            },
            // Pegar aquí la nueva sección
            {
                title: "Vocabulario Básico",
                subsections: [
                    {
                        title: "Colores",
                        content: [
                            "Red - Rojo",
                            "Blue - Azul",
                            "Green - Verde"
                        ]
                    },
                    {
                        title: "Números",
                        content: [
                            "One - Uno",
                            "Two - Dos",
                            "Three - Tres"
                        ]
                    }
                ]
            },
            {
                title: "Saludos y Despedidas",
                subsections: [
                    {
                        title: "Saludos",
                        content: [
                            "Hello - Hola",
                            "Good morning - Buenos días",
                            "Good afternoon - Buenas tardes"
                        ]
                    },
                    {
                        title: "Despedidas",
                        content: [
                            "Goodbye - Adiós",
                            "See you later - Nos vemos luego",
                            "Take care - Cuídate"
                        ]
                    }
                ]
            },
            {
title: "Días de la Semana",
subsections: [
{
    title: "Días",
    content: [
        "Monday - Lunes",
        "Tuesday - Martes",
        "Wednesday - Miércoles"
    ]
},
{
    title: "Días (cont.)",
    content: [
        "Thursday - Jueves",
        "Friday - Viernes",
        "Saturday - Sábado",
        "Sunday - Domingo"
    ]
}
]
},


        ]
    },
    intermediate: {
        title: "Intermedio",
        sections: [
            {
                title: "Gramática Intermedia",
                subsections: [
                    {
                        title: "Tiempos Verbales",
                        content: [
                            "Present Continuous",
                            "Past Simple",
                            "Future Simple"
                        ]
                    },
                    {
                        title: "Condicionales",
                        content: [
                            "If Clauses",
                            "Ejemplo: If it rains, I will stay home."
                        ]
                    }
                ]
            },
            {
                title: "Conversaciones Intermedias",
                subsections: [
                    {
                        title: "Conversaciones Cotidianas",
                        content: [
                            "How was your day?",
                            "What do you like to do?",
                            "Have you seen any good movies?"
                        ]
                    }
                ]
            }
        ]
    },
    advanced: {
        title: "Avanzado",
        sections: [
            {
                title: "Gramática Avanzada",
                subsections: [
                    {
                        title: "Modales",
                        content: [
                            "Should / Must / Might",
                            "Ejemplo: You should study more."
                        ]
                    },
                    {
                        title: "Phrasal Verbs",
                        content: [
                            "Get up / Turn off / Look after"
                        ]
                    }
                ]
            },
            {
                title: "Conversaciones Avanzadas",
                subsections: [
                    {
                        title: "Debates y Discusiones",
                        content: [
                            "What do you think about...?",
                            "I believe that..."
                        ]
                    }
                ]
            }
        ]
    }
};

const contentDiv = document.getElementById('content');
const levelButtons = document.querySelectorAll('.level-btn');
const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');

function renderContent(level) {
    const data = coursesData[level];
    contentDiv.innerHTML = '';
    data.sections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.classList.add('section', level);

        const sectionHeader = document.createElement('button');
        sectionHeader.classList.add('section-header');
        sectionHeader.innerHTML = `<span class="section-title">${section.title}</span> <i class="fas fa-chevron-down"></i>`;
        sectionHeader.onclick = () => toggleSection(sectionElement);

        sectionElement.appendChild(sectionHeader);

        const sectionContent = document.createElement('div');
        sectionContent.classList.add('section-content');

        section.subsections.forEach(subsection => {
            const subsectionElement = document.createElement('div');
            subsectionElement.classList.add('subsection');

            const subsectionTitle = document.createElement('h4');
            subsectionTitle.classList.add('subsection-title');
            subsectionTitle.textContent = subsection.title;

            const contentList = document.createElement('ul');
            contentList.classList.add('content-list');

            subsection.content.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                contentList.appendChild(listItem);
            });

            subsectionElement.appendChild(subsectionTitle);
            subsectionElement.appendChild(contentList);
            sectionContent.appendChild(subsectionElement);
        });

        sectionElement.appendChild(sectionContent);
        contentDiv.appendChild(sectionElement);
    });
}

function toggleSection(section) {
    const content = section.querySelector('.section-content');
    const isActive = content.classList.toggle('active');
    const icon = section.querySelector('.fas');
    icon.classList.toggle('fa-chevron-down', !isActive);
    icon.classList.toggle('fa-chevron-up', isActive);
}

function setActiveLevel(level) {
    levelButtons.forEach(button => {
        button.classList.remove('active-basic', 'active-intermediate', 'active-advanced');
        if (button.dataset.level === level) {
            button.classList.add(`active-${level}`);
        }
    });
    mobileNavButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.level === level) {
            button.classList.add('active');
        }
    });
}

levelButtons.forEach(button => {
    button.onclick = () => {
        const level = button.dataset.level;
        renderContent(level);
        setActiveLevel(level);
    };
});

mobileNavButtons.forEach(button => {
    button.onclick = () => {
        const level = button.dataset.level;
        renderContent(level);
        setActiveLevel(level);
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.scrollIntoView({ behavior: 'smooth' });
    };
});

// Cargar contenido inicial
renderContent('basic');
setActiveLevel('basic');
