/* eslint-disable no-plusplus */
import './style.css';
import dragDrop from './dragdrop';
import statusUpdate from './server';

class Task {
  constructor() {
    this.size = 0;
    this.ul = document.getElementById('task-list');
    this.savedTasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
  }

  clearContent() {
    this.savedTasks = this.savedTasks.filter((object) => object.completed !== true);
    localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
    this.displayAllTask();
  }

  addIndex() {
    if (this.savedTasks.length < 1) {
      return this.size;
    }
    return this.savedTasks[this.savedTasks.length - 1].index + 1;
  }

  addTask(book) {
    this.savedTasks.push(book);
    localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
    this.size += 1;
  }

  updateList() {
    let newIndex = 0;
    this.savedTasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
    // eslint-disable-next-line no-return-assign
    this.savedTasks.filter((obj) => (obj.index = newIndex++));
    localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
  }

  editTask(e, i) {
    if (e.key === 'Enter') {
      this.savedTasks[i].description = e.target.innerHTML;
      localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
      this.displayAllTask();
      e.preventDefault();
    }
    e.target.parentNode.children[1].contentEditable = true;
  }

  // to Delete task from the list and
  // updating the local storage at the same time

  deleteTask(e, i) {
    this.savedTasks.splice(i, 1);
    localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
    this.displayAllTask();
  }

  // Creating Elements Individually and
  //  displaying the on the todo List

  displayAllTask() {
    this.ul.innerHTML = '';
    this.updateList();

    this.savedTasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.className = 'List-items';
      li.draggable = 'true';
      li.addEventListener('dragstart', (e) => {
        dragDrop(e, i);
      });

      li.addEventListener('dragend', (e) => {
        dragDrop(e, i);
        this.displayAllTask();
      });

      const p = document.createElement('p');
      p.className = 'description';

      const checkboxes = document.createElement('input');
      checkboxes.type = 'checkbox';
      checkboxes.className = 'box';
      checkboxes.checked = task.completed;
      checkboxes.addEventListener('change', (e) => {
        statusUpdate(e, i);
        this.displayAllTask();
      });

      const index = document.createElement('span');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fas', 'fa-ellipsis-v', 'move-item');
      p.addEventListener('keydown', (e) => {
        this.editTask(e, i);
      });
      button.addEventListener('click', (e) => {
        button.classList.add('fa-trash-alt', 'trash');
        checkboxes.checked = p.classList.add('completed');
        document
          .querySelector('.fa-trash-alt')
          .addEventListener('click', (e) => {
            this.deleteTask(e, i);
          });
        this.editTask(e, i);
      });

      p.innerHTML = task.description;
      // index.innerHTML = task.index;

      li.appendChild(checkboxes);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
      this.ul.appendChild(li);
      this.ul.addEventListener('dragover', (e) => {
        dragDrop(e, i);
      });
    });
  }
}

const newTask = new Task();

export default function addTask(v) {
  newTask.addTask({
    description: v,
    completed: false,
    index: newTask.addIndex(),
  });
  newTask.displayAllTask();
}

document.getElementById('clearAll').addEventListener('click', () => {
  newTask.clearContent();
});

window.addEventListener('load', () => {
  newTask.displayAllTask();
});