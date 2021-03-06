/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
import localStorageMock from './localStorage.js';

const updateList = () => {
  let newIndex = 1;
  const savedTasks = localStorageMock.getItem('savedTasks') || [];
  savedTasks.filter((obj) => (obj.index = newIndex++));
  localStorageMock.setItem('savedTasks', savedTasks);
};

const deleteItems = (i, savedTasks) => {
  savedTasks.splice(i, 1);
  localStorageMock.setItem('savedTasks', savedTasks);
  updateList();
};

module.exports = deleteItems;