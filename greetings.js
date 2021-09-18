const introductionContainer = document.querySelector('#introduction-container');
const question = document.querySelector('#question');
const nameInput = document.querySelector('#name-input');

const greetingsContainer = document.querySelector('#greetings-container');
const greetings = document.querySelector('#greetings');
const greetingsName = document.querySelector('#greetings-name');

// checkLocalStorage = () => {};

hideIntroductionContainer = () => {
  introductionContainer.style.display = 'none';
  showGreetingsContainer();
};

showGreetingsContainer = () => {
  const userName = getLocalStorage('username');
  const greeting = document.createElement('span');
  greeting.classList.add('greeting');
  greeting.innerText = `Good Night, ${userName}`;
  greetingsContainer.appendChild(greeting);
};

let getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

// setItem의 key와 value를 인자로 받고 nameInput addEventListener에 전달하기 -> 나중에 수정하기
let saveLocalStorage = () => {
  const savedName = nameInput.value;
  localStorage.setItem('username', savedName);
  // console.log(savedName);
  // hideIntroductionContainer();
};

// 우선 keydown 과 keyup이 작동하는지 확인해보자
// 해당 동작을 name-input 과 연결하기

nameInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    // console.log(nameInput.value);
    saveLocalStorage();
    hideIntroductionContainer();
  }
});
