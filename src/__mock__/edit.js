import localStorageMock from './localStorage.js'

const savedTasks = []

const editTask = (e, i) => {
  if (e.key === 'Enter') {
    savedTasks[i].description = e.target.innerHTML;
    localStorageMock.setItem('savedTasks', savedTasks);
    e.preventDefault();
  }
  e.target.parentNode.children[1].contentEditable = true;
};

module.exports = editTask;