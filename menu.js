const mobileHamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('cancel');
const mobileM = document.querySelector('.hide');
const mobilemenu = document.querySelector('#mobilemenu');
const btnId1 = document.getElementById('btnId1');
const btnId2 = document.getElementById('btnId2');
const btnId3 = document.getElementById('btnId3');
const btnId4 = document.getElementById('btnId4');

function openMenu() {
  mobileM.style.display = 'block';
}

function closeMenu() {
  mobileM.style.display = 'none';
}

mobileHamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

mobilemenu.addEventListener('click', () => {
  mobileM.style.display = 'none';
  mobileHamburger.style.display = 'block';
});

const myWorkContainer = document.querySelector('.my-work');

const myCardsContent = [

  {
    myCardId: 'card-1',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: '1',

  },

  {
    myCardId: 'card-2',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: '2',

  },

  {
    myCardId: 'card-3',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: '3',

  },

  {
    myCardId: 'card-4',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: '4',

  },

];

const dynamiContent = () => {
  let myVarCont = '';

  for (let i = 0; i < myCardsContent.length; i += 1) {
    const myCardCon = `<div class="cards" id="${myCardsContent[i].myCardId}">

       <div class="image-container">
          <img src="${myCardsContent[i].workImage}" alt="First project visualization" class="my-project-image">
       </div>

       <div class="my-flex-card">
          <h2 class="my-work-title">${myCardsContent[i].workTitle}</h2>
          <p class="my-work-description">${myCardsContent[i].workDescription}</p>
           <ul class="my-work-tools">
              <li class="li-css">${myCardsContent[i].workTools[0]}</li>
              <li>${myCardsContent[i].workTools[1]}</li>
              <li>${myCardsContent[i].workTools[2]}</li>
              <li>${myCardsContent[i].workTools[3]}</li>
           </ul>
          <button class="visualize-button actv" id="btn${myCardsContent[i].myMbId}"type="button">See Project</button>
        </div></div>`;
    myVarCont += myCardCon;
  }
  myWorkContainer.insertAdjacentHTML('beforeend', myVarCont);
};
dynamiContent();

const popupwindowArray = [
  {
    id: '0',
    title: 'Multy Post - Stories 1',
    image: 'images/SnapshootPortfolio.svg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    tech1: 'html',
    tech2: 'Ruby on rail',
    tech3: 'css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
  },

  {
    id: '1',
    title: ' Multy Post - Stories 1',
    image: 'images/SnapshootPortfolio.svg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    tech1: 'html',
    tech2: 'Ruby on rail',
    tech3: 'css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
  },

  {
    id: '2',
    title: ' Multy Post - Stories 2',
    image: 'images/SnapshootPortfolio.svg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    tech1: 'html',
    tech2: 'Ruby on rail',
    tech3: 'css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
  },

  {
    id: '3',
    title: ' Multy Post - Stories 3',
    image: 'images/SnapshootPortfolio.svg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    tech1: 'html',
    tech2: 'Ruby on rail',
    tech3: 'css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
  },
];

let i = 0;

function display() {
  const popbody = document.querySelector('body');
  const windowSection = document.createElement('section');
  const Div_Container = document.createElement('div');
  const sectionDiv = document.createElement('div');
  const windowHeader = document.createElement('header');
  const windowTitle = document.createElement('h1');
  const ClosImg = document.createElement('img');
  const divImgContainer = document.createElement('div');
  const windowImg = document.createElement('img');
  const popupParagraph = document.createElement('p');
  const ul = document.createElement('ul');
  const ulLi1 = document.createElement('li');
  const ulLi2 = document.createElement('li');
  const ulLi3 = document.createElement('li');
  const divButton = document.createElement('div');
  const popBtn1 = document.createElement('button');
  const popBtn2 = document.createElement('button');

  popbody.className = 'popbody';
  windowSection.className = 'popupsection';
  Div_Container.className = 'popwindow-Container';
  sectionDiv.className = 'popup-div';
  windowHeader.className = 'popup-H';
  windowTitle.className = 'windowTitle';
  ClosImg.className = 'cancel';
  divImgContainer.className = 'div-Img-Container';
  windowImg.className = 'window-div-Img ';
  popupParagraph.className = 'divP';
  ul.className = 'listMain';
  ulLi1.className = 'list1';
  ulLi2.className = 'list2';
  ulLi3.className = 'list3';
  divButton.className = 'button-div';
  popBtn1.className = 'button1';
  popBtn2.className = 'button2';

  popbody.appendChild(windowSection);
  windowSection.appendChild(Div_Container);
  Div_Container.appendChild(sectionDiv);
  sectionDiv.appendChild(windowHeader);
  windowHeader.appendChild(windowTitle);
  windowHeader.appendChild(ClosImg);
  sectionDiv.appendChild(divImgContainer);
  divImgContainer.appendChild(windowImg);
  sectionDiv.appendChild(popupParagraph);
  sectionDiv.appendChild(ul);
  ul.appendChild(ulLi1);
  ul.appendChild(ulLi2);
  ul.appendChild(ulLi3);
  sectionDiv.appendChild(divButton);
  divButton.appendChild(popBtn1);
  divButton.appendChild(popBtn2);

  document.querySelector('.windowTitle').textContent = popupwindowArray[i].title;
  document.querySelector('.cancel').src = 'images/cancel.png';
  document.querySelector('.window-div-Img').src = popupwindowArray[i].image;
  document.querySelector('.divP').textContent = popupwindowArray[i].paragraph;
  document.querySelector('.list1').textContent = popupwindowArray[i].tech1;
  document.querySelector('.list2').textContent = popupwindowArray[i].tech2;
  document.querySelector('.list3').textContent = popupwindowArray[i].tech3;
  document.querySelector('.button1').textContent = 'See Live';
  document.querySelector('.button2').textContent = 'See Source';

  ClosImg.addEventListener('click', () => {
    windowSection.remove();
  });

  popBtn1.addEventListener('click', () => {
    window.open(popupwindowArray[i].btnLive);
  });

  popBtn2.addEventListener('click', () => {
    window.open(popupwindowArray[i].btnSource);
  });
}

btnId1.addEventListener('click', () => {
  i = 0;
  display();
});

btnId2.addEventListener('click', () => {
  i = 1;
  display();
});

btnId3.addEventListener('click', () => {
  i = 2;
  display();
});

btnId4.addEventListener('click', () => {
  i = 3;
  display();
});

