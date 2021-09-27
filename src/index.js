import './style.css';
import updateStatus from './check.js';

const container = document.getElementById('output-container');
const content = JSON.parse(localStorage.getItem('taskContent')) || [{
  index: 0,
  completed: true,
  description: 'wash the dishes',
},
{
  index: 1,
  completed: false,
  description: 'wash the dishes',
},
{
  index: 2,
  completed: true,
  description: 'wash the dishes',
},
{
  index: 3,
  completed: false,
  description: 'wash the dishes',
},
{
  index: 4,
  completed: false,
  description: 'wash the dishes',
},
];

function displayTask() {
  if (content != []) {
    content.forEach((element) => {
      const structure = ` <li class='List-items' id='${element.index}'>
      <input type='checkbox' class='box' data-id='${element.index}'  ${element.completed ? 'checked' : ''}>
      <input type='text' value='${element.description}' data-index='${element.index}' class='description ${element.completed ? 'completed' : ''}'>
      <i class='fas fa-ellipsis-v move-element' data-id='${element.index}'></i>
      </li> `
      container.innerHTML += structure;
    });
  }
  const checkbox = document.querySelectorAll('.box');
  checkbox.forEach((chbox) => {
    chbox.addEventListener('change', updateStatus);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('taskContent')) {
    localStorage.setItem('taskContent', JSON.stringify(content));
  }
});
displayTask();