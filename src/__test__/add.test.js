/**
 * @jest-environment jsdom
 */

import localStorageMock from '../__mock__/localStorage.js';
import add from '../__mock__/add.js';

describe('adding inputs to localStorage', () => {
  const savedTasks = [];

  test('adding updated input to localStorage', () => {
    document.body.innerHTML = '<input id ="task-list" value="make smoothie"> ';
    add(savedTasks);
    expect(savedTasks).toHaveLength(1);
  });

  test('localStorage should be update with +1 index', () => {
    expect(localStorageMock.getItem('savedTasks')).toHaveLength(1);
  });

  test('adding updated input to localStorage', () => {
    document.body.innerHTML = '<input id ="task-list" value="make noodles"> ';
    add(savedTasks);
    expect(savedTasks).toHaveLength(2);
  });
});
