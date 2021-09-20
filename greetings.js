const introductionContainer = document.querySelector('#introduction-container');
const question = document.querySelector('#question');
const nameInput = document.querySelector('#name-input');

const greetingsContainer = document.querySelector('#greetings-container');

function greetingMessage(hour){
  if(hour > 5 && hour < 11){
    greeting.textContent = "Good Morning"
  } else if(hour >= 11 && 17) {
    greeting.textContent = "Good Afternoon"
  } else if(hour >= 17 && hour < 22){
    greeting.textContent = "Good Evening"
  } else {
    greeting.textContent = "Good Night"
  }
}

hideIntroductionContainer = () => {
  introductionContainer.style.display = 'none';
  showGreetingsContainer();
};

showGreetingsContainer = () => {
  const userName = getLocalStorage('username');
  const greeting = document.createElement('span');
  const greetingName = document.createElement('span');
  greeting.classList.add('greeting');
  greetingName.classList.add('greeting-name');
  greeting.innerText = `Hello,`;
  greetingName.innerText = `${userName}.`;
  greetingsContainer.appendChild(greeting);
  greetingsContainer.appendChild(greetingName);
};

let getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

let saveLocalStorage = () => {
  const savedName = nameInput.value;
  localStorage.setItem('username', savedName);
  // console.log(savedName);
};



nameInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    // console.log(nameInput.value);
    saveLocalStorage();
    hideIntroductionContainer();
  }
});
