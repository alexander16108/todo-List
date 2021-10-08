import localStorageMock from './localStorage.js';
import updateList from './remove.js';

let savedTasks = [];

const clearContent = () => {
  savedTasks = savedTasks.filter((object) => object.completed !== true);
  localStorageMock.setItem('savedTasks', savedTasks);
  updateList();
};

module.exports = clearContent;