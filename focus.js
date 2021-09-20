const focusContainer = document.querySelector('#focus-container');
const focusQuestion = document.querySelector('#focus-question');
const focusInput = document.querySelector('#focus-input');

const focusContent = document.querySelector('#focus-content');

const hideFocusContainer = () => {
  focusContainer.style.display = 'none';
  showFocusContent();
};

let focuses = [];

const FOCUSES_KEY = 'focuses';

//
function saveFocuses() {
  localStorage.setItem(FOCUSES_KEY, JSON.stringify(focuses));
}

function deleteFocus(event) {}

// const showFocusContent = () => {
//   const savedFocus = getFocusLocalStorage('focus');
//   const focusTitle = document.createElement('h3');
//   const focusList = document.createElement('span');
//   const focusCheckbox = document.createElement('input');
//   const deleteFocus = document.createElement('span');

//   focusTitle.classList.add('focus-title');
//   focusList.classList.add('focus-list');
//   focusCheckbox.classList.add('focus-checkbox');
//   focusCheckbox.setAttribute('type', 'checkbox');
//   deleteFocus.classList.add('delete-focus');

//   focusTitle.innerText = `Today`;
//   focusList.innerText = `${savedFocus}`;
//   deleteFocus.innerText = `Delete`;
//   focusContent.appendChild(focusTitle);
//   focusContent.appendChild(focusCheckbox);
//   focusContent.appendChild(focusList);
//   focusContent.appendChild(deleteFocus);
// };

// let getFocusLocalStorage = (key) => {
//   return localStorage.getItem(key);
// };

// let saveFocusLocalStorage = () => {
//   const savedFocus = focusInput.value;
//   localStorage.setItem('focus', savedFocus);
// };

// focusInput.addEventListener('keydown', function (event) {
//   if (event.code === 'Enter') {
//     saveFocusLocalStorage();
//     hideFocusContainer();
//   }
// });

// focusCheckbox.addEventListener('click', function (event) {
//   if (event.checked) {
//     focusList.style = 'text-decoration: line-through';
//   } else {
//     focusList.style = 'text-decoration: none';
//   }
// });

// focusCheckbox.addEventListener('click', onCheckboxClick);
