const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);

const open = document.querySelectorAll('.see-more');
for (let i = 0; i < open.length; i++) {
  open[i].addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main'
    const popup = document.createElement('div');
    popup.className = 'popup'
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
      body.removeChild(main)
    })
    
    const firstProject = document.querySelector('.projectOne')
    firstProject.addEventListener( 'click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[0].name
      document.getElementById('description').innerHTML = projectInformation[0].description
      document.getElementById('featuredImage').innerHTML = projectInformation[0].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[0].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[0].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[0].technologies.technology3
    }
    )
    
    const secondProject = document.querySelector('.projectTwo')
    secondProject.addEventListener('click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[1].name
      document.getElementById('description').innerHTML = projectInformation[1].description
      document.getElementById('featuredImage').innerHTML = projectInformation[1].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[1].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[1].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[1].technologies.technology3
    }
    )
    const thirdProject = document.querySelector('.projectThree')
    thirdProject.addEventListener('click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[2].name
      document.getElementById('description').innerHTML = projectInformation[2].description
      document.getElementById('featuredImage').innerHTML = projectInformation[2].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[2].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[2].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[2].technologies.technology3
    }
    )
    const fourthProject = document.querySelector('.projectFour')
    fourthProject.addEventListener('click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[3].name
      document.getElementById('description').innerHTML = projectInformation[3].description
      document.getElementById('featuredImage').innerHTML = projectInformation[3].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[3].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[3].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[3].technologies.technology3
    }
    )
    const fifthProject = document.querySelector('.projectFive')
    fifthProject.addEventListener('click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[4].name
      document.getElementById('description').innerHTML = projectInformation[4].description
      document.getElementById('featuredImage').innerHTML = projectInformation[4].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[4].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[4].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[4].technologies.technology3
    }
    )
    const sixthProject = document.querySelector('.projectSix')
    sixthProject.addEventListener('click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[5].name
      document.getElementById('description').innerHTML = projectInformation[5].description
      document.getElementById('featuredImage').innerHTML = projectInformation[5].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[5].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[5].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[5].technologies.technology3
    }
    )
    const seventhProject = document.querySelector('.projectSeven')
    seventhProject.addEventListener('click', () => {
      document.getElementById('modal-title').innerHTML = projectInformation[6].name
      document.getElementById('description').innerHTML = projectInformation[6].description
      document.getElementById('featuredImage').innerHTML = projectInformation[6].featuredImage
      document.getElementById('technology1').innerHTML = projectInformation[6].technologies.technology1
      document.getElementById('technology2').innerHTML = projectInformation[6].technologies.technology2
      document.getElementById('technology3').innerHTML = projectInformation[6].technologies.technology3
    }
    )
  })
}

let projectInformation = [
{
  name: 'Website Portfolio',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
{
  name: 'Technology Company Website',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'sass',
    technology3: 'ruby'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
{
  name: 'Business Company App',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'react'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
{
  name: 'Responsive Mobile App',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
{
  name: 'Standalone App',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
{
  name: 'Comparison App',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
{
  name: 'Weather App',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './img/Snapshoot Portfolio.png',
  technologies: {
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby'
  },
  link: 'https://zeraltz.github.io/Portfolio-Website/',
  source: 'https://github.com/Zeraltz/Portfolio-Website'
},
];
