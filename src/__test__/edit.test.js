/**
 * @jest-environment jsdom
 */

 import localStorageMock from '../__mock__/localStorage.js';
 import editTask from '../__mock__/edit.js';

 describe('edit inputs in array', () => {
  const savedTasks = [
    {
       description: 'make noodles',
       completed: false,
       index: 1,
    },
    {
       description: 'eat noodles',
       completed: true,
       index: 2,
    },
  ];

  test('edit the first item in the array', () => {
    const e = document.createElement('input');
    e.innerHTML = 'going to bed';
    const i = 1;
    editTask(e, i, savedTasks)
    expect(savedTasks[1].description).toBe('going to bed')
  });

  test('Local storage should not change', () => {
    expect(localStorageMock.getItem('savedTasks')[1].description).toBe('going to bed');
  });
 });