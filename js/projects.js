const container_list = document.querySelector('.container_list');
const container_render = document.querySelector('.container_render');

class Project {
  constructor(name, description, link, image, stack, date, long_description) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.image = image;
    this.stack = stack;
    this.date = date;
    this.long_description = long_description;
  }

  render(container)
  {
    let details = `
        <div class="project__left">
            <p class="project__date">${this.date}</p>
            <div class="project__stack">
                <p class="project__stack_title">Stack technique :</p>
                <ul class="project__stack_list">
    `;
    this.stack.forEach(tech => {
        details += `<li class="project__stack_item">${tech}</li>`;
    });
    details += `
            </div>
        </div>
        <div class="project__right">
            <p class="project__longdescription">${this.long_description}</p>
        </div>
    `;

    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
      <div class="project__image">
        <img src="${this.image}" alt="${this.name}">
      </div>
      <div class="project__content">
        <div class="header">
            <div>
                <h3 class="project__title">${this.name}</h3>
                <p class="project__description">${this.description}</p>
            </div>
            <div class="project__controls">
                <a class="project__button project__link" href="${this.link}" target="_blank">Lien du projet</a>
                <a class="project__seemore project__button project__link">Voir +</a>
            </div>
        </div>
        <div class="details">
            ${details}
        </div>
      </div>
    `;
    container.appendChild(project);

    const seemore = project.querySelector('.project__seemore');
    project.classList.toggle('notactive');
    seemore.addEventListener('click', () => {
        project.classList.toggle('active');
        project.classList.toggle('notactive');
        if(project.classList.contains('active')){
            seemore.innerHTML = 'Voir -';
        } else {
            seemore.innerHTML = 'Voir +';
            
        }
    });
  }
}

class List{
    constructor(container, projects){
        this.container = container;
        this.projects = projects;
    }

    newItem(project)
    {
        const item = document.createElement('li');
        item.classList.add('list__item');
        item.innerHTML = `
            <span><span class="list_item_icon"></span>${project.name}</span>
        `;
        return item;
    }

    newItems(render_container)
    {
        this.items = document.createElement('ul');
        this.items.classList.add('list');
        this.projects.forEach(project => {
            const item = this.newItem(project);
            item.addEventListener('click', () => {
                render_container.innerHTML = '';
                project.render(render_container);
                item.classList.add('active');
                [...this.items.children].forEach(otherItem => {
                    if(otherItem !== item){
                        otherItem.classList.remove('active');
                    }
                });
            });
            this.items.appendChild(item);
        });
    }
}

class InteractiveList {
    constructor(list_container, render_container, projects){
        this.list_container = list_container;
        this.render_container = render_container;
        this.projects = projects;

        this.list = new List(this.list_container, this.projects);
        this.list.newItems(render_container);
        this.list_container.appendChild(this.list.items);
        this.list.items.firstChild.click();
    }
}

const projects = [
    new Project(
        'Li_Stats!',
        'Tracker de stats pour League of Legends',
        'https://github.com/ADFuji/li_stats_js',
        './images/projets/li_stats.png',
        [
            'JavaScript',
            'Webpack',
            'Babel',
            'Sass',
            'HTML',
        ],
        '18 Janvier 2023',
        "Li_Stats! est une application de tracking de statistiques pour le jeu League of Legends. Elle permet de suivre ses statistiques de jeu, de consulter les statistiques des autres joueurs, de consulter les statistiques des champions, et de consulter les statistiques des objets."
    ),
    new Project(
        'Planium',
        "Application de visualisation d'un calendrier",
        'https://github.com/ADFuji/planium',
        './images/projets/planium.png',
        [
            'JavaScript',
            'ReactJS',
            'SASS',
            'Axios',
        ],
        '14 Mars 2023',
        "Planium est une application de visualisation de calendrier. Elle permet de créer des événements, de les modifier, de les supprimer, et de les partager avec d'autres utilisateurs."
    ),
    new Project(
        'Puissance 4',
        'Jeu de puissance 4 en ligne',
        'https://p4.fuji.studio',
        './images/projets/p4.png',
        [
            'JavaScript'
        ],
    ),
    // new Project(
    //     'NGE Tools',
    //     "Application d'administration de postes de travail",
    //     'https://www.google.fr',
    //     'https://picsum.photos/1920/1079',
    //     [
    //         "C#",
    //         "WPF",
    //         "dotNET",
    //         "Azure DevOps",
    //         "PowerShell"
    //     ],
    //     'Juillet 2023',
    //     "NGE Tools est une application d'administration de postes de travail. Elle permet de gérer les postes de travail, les utilisateurs, les applications, et les licences."
    // ),
    new Project(
        "Let's Draw Together",
        'Logiciel de dessin collaboratif (développement en pause)',
        'https://github.com/ADFuji/lets_draw_together',
        './images/projets/lets_draw_together.png',
        [
            "JavasScript",
            "NodeJS",
            "Express",
            "Socket.io",
            "Electron"
        ],
        '24 Février 2023',
        "Let's Draw Together est une application de dessin collaboratif. Elle permet de dessiner sur un canvas, et de partager son dessin avec d'autres utilisateurs."
    ),
    new Project(
        "Tileset Drawer",
        'Logiciel de dessin pixel art (développement en pause)',
        'https://github.com/ADFuji/tileset-drawer',
        './images/projets/tileset_drawer.png',
        [
            "Java",
            "Java FX",
            "Maven"
        ],
        '17 Novembre 2022',
        "Tileset Drawer est une application de dessin pixel art. Elle permet de dessiner sur un canvas, et de télécharger son dessin."
    ),
    new Project(
        "Shift-Trackr",
        "Application de gestion d'horaires (développement en cours)",
        'https://etulab.univ-amu.fr/shifttrackr',
        './images/projets/shifttrackr.png',
        ['Angular', 'NodeJS', 'MongoDB', 'Electron'],
        '2020',
        "Shift-Trackr est une application de gestion d'horaires. Elle permet de gérer les horaires des employés, de gérer les plannings, et de gérer les congés."
    ),
];

const interactiveList = new InteractiveList(container_list, container_render, projects);

