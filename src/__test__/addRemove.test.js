/**
 * @jest-environment jsdom
 */

import LocalStorage from '../server.js';

describe('test add elements', () => {
  document.body.innerHTML = '<div>'
  + '<input type="text" name="task" id="task"'
  + 'class="input-task element-border" placeholder="Add to your list..." value="add testing">'
  + '<ul class="tasks-list">'
  + '</ul>'
  + '</div>';

  const event = new KeyboardEvent('keydown', { key: 'Enter' });

  const localStorage = new LocalStorage();

  const tasksList = document.querySelector('.task-list');

  let toDoList = [];

  const addTodoToList = (task) => {
    const taskItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const taskDescription = document.createElement('label');
    const checkDescription = document.createElement('div');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v', 'list-icon');
    taskItem.classList.add('element-border');
    taskItem.setAttribute('data-id', task.index);
    taskItem.setAttribute('id', `Task${task.index}`);
    checkBox.classList.add('list-checkbox');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = task.completed;
    taskDescription.innerHTML = task.description;
    if (task.completed) {
      taskDescription.style.textDecoration = 'line-through';
    }
    checkDescription.classList.add('check-description');
    checkDescription.appendChild(checkBox);
    checkDescription.appendChild(taskDescription);
    taskItem.appendChild(checkDescription);
    taskItem.appendChild(icon);
    tasksList.appendChild(taskItem);
  };

  const displayTasks = () => {
    tasksList.innerHTML = '';
    toDoList.forEach((task) => addTodoToList(task));
  };

  const checkDom = () => [...tasksList.children];

  // Act
  const add = (event) => {
    if (event.key === 'Enter') {
      toDoList = localStorage.getDataLocalStorage();
      const input = document.querySelector('.input-task');
      const inputValue = input.value;
      const task = {
        description: inputValue,
        completed: false,
        index: toDoList.length + 1,
      };
      toDoList.push(task);
      localStorage.setDataLocalStorage(toDoList);
      displayTasks();
      return toDoList;
    }
    return false;
  };

  const addTodo = add(event);

  // Assert
  test('add task to the list', () => {
    expect(addTodo.length === 1).toBeTruthy();
  });

  test('add a object', () => {
    expect(addTodo).toEqual([
      {
        description: 'add testing',
        completed: false,
        index: 1,
      },
    ]);
  });

  test('it adds the task to the list in the dom', () => {
    expect(checkDom().length !== 0).toBeTruthy();
  });
});

