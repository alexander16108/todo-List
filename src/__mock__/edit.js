import localStorageMock from './localStorage.js';

const editTask = (e, i, savedTasks) => {
    savedTasks[i].description = e.innerHTML;
    localStorageMock.setItem('savedTasks', savedTasks);
  // e.parentNode.children[1].contentEditable = true;
};

module.exports = editTask;