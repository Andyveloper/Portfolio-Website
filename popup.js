const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);

const open = document.querySelectorAll('.see-more');
for (let i = 0; i < open.length; i++) {
  open[i].addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
    <h3 id='modal-title' class='pad-bot'>Multi Post Stories</h3>
    <button class='close'><i class="closeIcon material-icons ">close</i></button>
    <ul id="lang-boxes">
    <li id='technology1' class="lang-box1 fs"></li>
    <li id='technology2' class="lang-box1 fs"></li>
    <li id='technology3' class="lang-box1 fs"></li>
    </ul>
    <div class='row-popup'>
      <img id='featuredImage' class='centerImage' src="./img/Snapshoot Portfolio.png" alt="">
      <div class='col-2'>
      <p id='description' class = 'font-size'></p>
      <div class='center-btn'>
        <button id='link'><a class='btn-style' href='https://zeraltz.github.io/Portfolio-Website/'>See Live<img src="./img/icons/Icon - Export.svg" alt=""></a></button>
        <button id='source'><a class='btn-style' href='https://github.com/Zeraltz/Portfolio-Website'>See Source<img src="./img/social/Icon -GitHub.svg" alt="Github"></a></button> 
      </div>
    </div>
    `;

    main.appendChild(popup);
    body.appendChild(main);

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      body.removeChild(main);
    });
  });
}

const projectInformation = [
  {
    name: 'Website Portfolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './img/Img-placeholder.png',
    technologies: {
      technology1: 'html',
      technology2: 'bootstrap',
      technology3: 'ruby',
      technology4: 'css',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
  {
    name: 'Technology Company Website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: {
      technology1: 'html',
      technology2: 'sass',
      technology3: 'ruby',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
  {
    name: 'Business Company Application',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: {
      technology1: 'html',
      technology2: 'bootstrap',
      technology3: 'react',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
  {
    name: 'Responsive Mobile Application',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: {
      technology1: 'html',
      technology2: 'bootstrap',
      technology3: 'ruby',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
  {
    name: 'Standalone App for Entrepreneurs',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: {
      technology1: 'html',
      technology2: 'bootstrap',
      technology3: 'ruby',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
  {
    name: 'Market Price Comparison App',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: {
      technology1: 'html',
      technology2: 'bootstrap',
      technology3: 'ruby',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
  {
    name: 'Weather Forecast Application',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: {
      technology1: 'html',
      technology2: 'bootstrap',
      technology3: 'ruby',
    },
    link: 'https://zeraltz.github.io/Portfolio-Website/',
    source: 'https://github.com/Zeraltz/Portfolio-Website',
  },
];

const populateModal = (className, index) => {
  const project = document.querySelector(className);
  project.addEventListener('click', () => {
    document.getElementById('modal-title').innerHTML = projectInformation[index].name;
    document.getElementById('description').innerHTML = projectInformation[index].description;
    document.getElementById('featuredImage').innerHTML = projectInformation[index].featuredImage;
    document.getElementById('technology1').innerHTML = projectInformation[index].technologies.technology1;
    document.getElementById('technology2').innerHTML = projectInformation[index].technologies.technology2;
    document.getElementById('technology3').innerHTML = projectInformation[index].technologies.technology3;
  });
};

for (let i = 0; i < projectInformation.length; i++) {
  populateModal(`.project${i + 1}`, i);
}
