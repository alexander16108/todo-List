/**
 * @jest-environment jsdom
 */

import localStorageMock from '../__mock__/localStorage.js';
import statusUpdate from '../__mock__/status.js';

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

test('change the task from false to true', () => {
  const i = 0;
  const e = document.createElement('checkbox');
  e.checked = true;
  statusUpdate(e, i, savedTasks);
  expect(savedTasks[0].completed).toBe(true);
});

test('updating LocalStorage for Updated files', () => {
  expect(localStorageMock.getItem('savedTasks')[0].completed).toBe(true);
});

test('change the task from false to true', () => {
  const i = 1;
  const e = document.createElement('checkbox');
  e.checked = false;
  statusUpdate(e, i, savedTasks);
  expect(savedTasks[1].completed).toBe(false);
});