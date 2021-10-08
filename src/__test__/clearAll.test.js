/**
 * @jest-environment jsdom
 */

import localStorageMock from '../__mock__/localStorage.js';
import clearContent from '../__mock__/clearAll.js';

describe('Remove completed tasks from list', () => {
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
  test('should return an array without completed tasks', () => {
    expect(clearContent(savedTasks)).toHaveLength(1);
  });
  test('should be updated after deleting the tasks', () => {
    expect(localStorageMock.getItem('savedTasks')).toStrictEqual(clearContent(savedTasks));
  });
});