import localStorageMock from './localStorage.js';

const statusUpdate = (e, i, savedTasks) => {
  savedTasks[i].completed = !savedTasks[i].completed;
  e.checked = savedTasks[i].completed;
  localStorageMock.setItem('savedTasks', savedTasks);
  return savedTasks;
};

module.exports = statusUpdate;