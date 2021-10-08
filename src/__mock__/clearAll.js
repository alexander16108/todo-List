import localStorageMock from './localStorage.js';

function clearContent(savedTasks) {
  savedTasks = savedTasks.filter((e) => e.completed !== true);
  savedTasks.forEach((e) => {
    e.index = savedTasks.indexOf(e) + 1;
  });
  localStorageMock.setItem('savedTasks', savedTasks);
  savedTasks = localStorageMock.getItem('savedTasks');
  return savedTasks;
}

export default clearContent;