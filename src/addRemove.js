/* eslint-disable no-plusplus */
import './style.css';
import statusUpdate from './server.js';

    let size = 0;
    const ul = document.getElementById('task-list');
    let savedTasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

  const clearContent = () => {
    savedTasks = savedTasks.filter((object) => object.completed !== true);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    displayAllTask();
  }

  const addIndex = () => {
    if (savedTasks.length < 1) {
      return size;
    }
    return savedTasks[savedTasks.length - 1].index + 1;
  }

  const addTask = (book) => {
    savedTasks.push(book);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    size += 1;
  }

  const updateList = () => {
    let newIndex = 0;
    savedTasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
    // eslint-disable-next-line no-return-assign
    savedTasks.filter((obj) => (obj.index = newIndex++));
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
  }

  const editTask = (e, i) => {
    if (e.key === 'Enter') {
      savedTasks[i].description = e.target.innerHTML;
      localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
      displayAllTask();
      e.preventDefault();
    }
    e.target.parentNode.children[1].contentEditable = true;
  }

  // to Delete task from the list and
  // updating the local storage at the same time

  const deleteTask = (e, i) => {
    savedTasks.splice(i, 1);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    displayAllTask();
  }

  // Creating Elements Individually and
  //  displaying the on the todo List

 const displayAllTask = () => {
    ul.innerHTML = '';
    updateList();

    savedTasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.classList.add('List-items', 'flex-btw');
      li.draggable = 'false';

      const p = document.createElement('p');
      p.classList.add( 'description', 'bd-ol');

      const checkboxes = document.createElement('input');
      checkboxes.type = 'checkbox';
      checkboxes.className = 'box';
      checkboxes.checked = task.completed;
      if (task.completed === true) {
        checkboxes.checked = p.classList.add('completed');
      }else {
        checkboxes.checked = p.classList.remove('completed');
      }
      checkboxes.addEventListener('change', (e) => {
        statusUpdate(e, i);
        displayAllTask();
      });

      const index = document.createElement('span');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fas', 'fa-ellipsis-v', 'move-item', 'flex-md', 'bd-ol');
      p.addEventListener('keydown', (e) => {
        editTask(e, i);
      });
      button.addEventListener('click', (e) => {
        button.classList.add('fa-trash-alt', 'trash', 'flex-md', 'bd-ol');
        document.querySelector('.fa-trash-alt').addEventListener('click', (e) => {deleteTask(e, i)})
        editTask(e, i);
      });

      p.innerHTML = task.description;

      li.appendChild(checkboxes);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
      ul.appendChild(li);
    });
  }


export default function addTasks(v) {
  addTask({
    description: v,
    completed: false,
    index: addIndex(),
  });
  displayAllTask();
}

document.getElementById('clearAll').addEventListener('click', () => {
  clearContent();
});

window.addEventListener('load', () => {
  displayAllTask();
});