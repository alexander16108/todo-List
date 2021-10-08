import localStorageMock from './localStorage.js';

const clearContent = () => {
  savedTasks = savedTasks.filter((object) => object.completed !== true);
  localStorageMock.setItem('savedTasks', savedTasks);
};