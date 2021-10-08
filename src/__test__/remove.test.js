/**
 * @jest-environment jsdom
 */

import localStorageMock from '../__mock__/localStorage';

import deleteItems from '../__mock__/remove';

const savedTasks = [
  {
    description: 'make smoothie',
    completed: false,
    index: 1,
  },
  {
    description: 'make noodles',
    completed: false,
    index: 2,
  },
];

describe('removing tasks from the array and localStorage', () => {
  test('removing one input from array', () => {
    const i = savedTasks[0];
    deleteItems(i, savedTasks);
    expect(savedTasks).toHaveLength(1);
  });

  test('updating LocalStorage for Updated files', () => {
    expect(localStorageMock.getItem('savedTasks')).toHaveLength(1);
  });

  test('check if index has updated', () => {
    expect(savedTasks[0].index).toBe(1);
  });
});