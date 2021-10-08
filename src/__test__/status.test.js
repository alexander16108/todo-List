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
 ];

 test('change the task from false to true', () => {
   const element = savedTasks[0];
   const checkbox = document.createElement('checkbox');
   checkbox.checked = true;
  statusUpdate(element, checkbox, savedTasks);
  expect(element.completed).toBe(true);
 })

 test('updating LocalStorage for Updated files', () => {
  expect(localStorageMock.getItem('savedTasks')[0].completed).toBe(true);
});