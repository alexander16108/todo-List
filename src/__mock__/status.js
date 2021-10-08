import localStorageMock from './localStorage.js';

const statusUpdate = (e, i) => {
  const savedTasks = localStorageMock.getItem('savedTasks');
  savedTasks[i].completed = !savedTasks[i].completed;
  e.target.checked = savedTasks[i].completed;
  localStorageMock.setItem('savedTasks', savedTasks);
};

module.exports = statusUpdate;