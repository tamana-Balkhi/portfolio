const mobileHamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('cancel');
const mobileM = document.querySelector('.hide');
const mobilemenu = document.querySelector('#mobilemenu');

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

const myWorkContainer = document.querySelector('.my-recent-works');

const popupwindowArray = [

  {
    myCardId: 'prj1-card',
    workImage: './images/ImgPlaceholder.png',
    image: 'images/SnapshootPortfolio.svg',
    workTitle: 'Multi-Post Stories',
    title: 'Multy Post - Stories 1',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    tech1: 'Html',
    tech2: 'Ruby on rails',
    tech3: 'Css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
    myMbId: 'btnId1',

  },

  {
    myCardId: 'prj2-card',
    workImage: './images/ImgPlaceholder.png',
    image: 'images/SnapshootPortfolio.svg',
    workTitle: 'Multi-Post Stories',
    title: 'Multy Post - Stories 2',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    tech1: 'Html',
    tech2: 'Ruby on rails',
    tech3: 'Css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
    myMbId: 'btnId2',

  },

  {
    myCardId: 'prj3-card',
    workImage: './images/ImgPlaceholder.png',
    image: 'images/SnapshootPortfolio.svg',
    workTitle: 'Multi-Post Stories',
    title: 'Multy Post - Stories 3',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    tech1: 'Html',
    tech2: 'Ruby on rails',
    tech3: 'Css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
    myMbId: 'btnId3',

  },

  {
    myCardId: 'prj4-card',
    workImage: './images/ImgPlaceholder.png',
    image: 'images/SnapshootPortfolio.svg',
    workTitle: 'Multi-Post Stories',
    title: 'Multy Post - Stories 4',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    tech1: 'Html',
    tech2: 'Ruby on rails',
    tech3: 'Css',
    btnLive: 'https://tamana-balkhi.github.io/',
    btnSource: 'https://github.com/tamana-Balkhi/portfolio.git ',
    myMbId: 'btnId4',

  },

];

const displayC = () => {
  let theCont = '';

  for (let i = 0; i < popupwindowArray.length; i += 1) {
    const myCardCon = `
     <div class="my-works">
        <div class="projects">
          <div class="prj-card" id="${popupwindowArray[i].myCardId}">
            <div class="my-work-img1">
              <img src="${popupwindowArray[i].workImage}" alt="image" />
            </div>
            <div class="prj-text">
              <h3 class="title">${popupwindowArray[i].workTitle}</h3>
              <p class="description">${popupwindowArray[i].workDescription}</p>
              <ul class="prog-langs">
                <li class="li-no-border">${popupwindowArray[i].workTools[0]}</li>
                <li>${popupwindowArray[i].workTools[1]}</li>
                <li>${popupwindowArray[i].workTools[2]}</li>
                <li>${popupwindowArray[i].workTools[3]}</li>
              </ul>
              <button type="button" class="btn" id="${popupwindowArray[i].myMbId}">See Project</button>
            </div>
          </div>
        </div>
      </div>
    </div> `;

    theCont += myCardCon;
  }
  myWorkContainer.insertAdjacentHTML('beforeend', theCont);
};
displayC();

// popup window //
const btnId1 = document.getElementById('btnId1');
const btnId2 = document.getElementById('btnId2');
const btnId3 = document.getElementById('btnId3');
const btnId4 = document.getElementById('btnId4');

let i = 0;

function display() {
  const popbody = document.querySelector('body');
  const windowSection = document.createElement('section');
  const DivContainer = document.createElement('div');
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
  DivContainer.className = 'popwindow-Container';
  sectionDiv.className = 'popup-div';
  windowHeader.className = 'popup-H';
  windowTitle.className = 'windowTitle';
  ClosImg.className = 'cancel2';
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
  windowSection.appendChild(DivContainer);
  DivContainer.appendChild(sectionDiv);
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
  document.querySelector('.cancel2').src = 'images/cancel.png';
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

function messageValidator() {
  const email = document.getElementById('email');
  const form = document.getElementById('form-validation');
  const validationmessage = document.getElementById('emailerror');

  const regx = /[A-Z]/g;
  if (regx.test(email.value)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    validationmessage.innerHTML = 'Email should be written in lowercase';
    validationmessage.style.color = '#f00';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    validationmessage.innerHTML = 'Validated succesfully';
    validationmessage.style.color = '#00ff00';
  }
}
document.getElementById('email').addEventListener('keydown', messageValidator);

const email = document.getElementById('email');
const form = document.getElementById('form-validation');

form.addEventListener('submit', (e) => {
  const regx = /[A-Z]/g;
  if (regx.test(email.value)) {
    e.preventDefault();
    messageValidator();
  }
});

const name = document.getElementById('name');
const message = document.getElementById('message');

// message.value = localStorage.getItem('message');

function localStorageData() {
  form.addEventListener('input', () => {
    const storageData = {
      uName: `${name.value}`,
      uEmail: `${email.value}`,
      uMessage: `${message.value}`,
    };
    localStorage.setItem('storageData', JSON.stringify(storageData));
  });
}
localStorageData();
function getLocalStorage() {
  const loadInfo = JSON.parse(localStorage.getItem('storageData'));
  name.value = loadInfo.uName;
  email.value = loadInfo.uEmail;
  message.value = loadInfo.uMessage;
}
getLocalStorage();
