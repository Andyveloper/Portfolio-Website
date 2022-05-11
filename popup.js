const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);

const open = document.querySelector('.see-more');
open.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main'
  const popup = document.createElement('div');
  popup.className = 'popup'
  popup.innerHTML = `
  <h3 id='subtitle' class='pad-bot'>Multi Post Stories</h3>
  <button class='close'><i class="closeIcon material-icons ">close</i></button>
  <ul id="lang-boxes">
  <li class="lang-box1 fs">html</li>
  <li class="lang-box1 fs">Bootstrap</li>
  <li class="lang-box1 fs">Ruby on rails</li>
  </ul>
  <img class='centerImage' src="./img/Snapshoot Portfolio.png" alt="">
  <p class = 'font-size'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
  <div class='center-btn'>
    <button type='button' class='see-more btn-style' href='#'>See Live<img src="./img/icons/Icon - Export.svg" alt=""></button>
    <button class='btn-style' type='button' href='#'>See Source<img src="./img/social/Icon -GitHub.svg" alt="Github"></button> 
  </div>
  `;
    
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main)
  })
})


