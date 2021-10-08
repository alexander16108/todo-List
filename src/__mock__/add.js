import localStorageMock from './localStorage.js';

const savedTasks = [];
let size = 0;

const Index = () => {
  if (savedTasks.length < 1) {
    return size + 1;
  }
  return savedTasks[savedTasks.length - 1].index + 1;
};

const add = (savedTasks) => {
  const inputObj = document.getElementById('task-list').value;

  const addTask = {
    description: inputObj,
    completed: false,
    index: Index(),
  };
  savedTasks.push(addTask);
  localStorageMock.setItem('savedTasks', savedTasks);
  size += 1;
  return savedTasks;
};

module.exports = add;