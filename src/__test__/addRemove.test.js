/**
 * @jest-environment jsdom
 */

import updateStatus from '../server.js';

describe('test add elements', () => {
  document.body.innerHTML = '<div>'
  + '<input type="text" name="task" id="task"'
  + 'class="input-task element-border" placeholder="Add to your list..." value="add testing">'
  + '<ul class="tasks-list">'
  + '</ul>'
  + '</div>';

  const tasksList = document.querySelector('.task-list');

  let toDoList = [];

  const displayAllTask = () => {
    ul.innerHTML = '';
    // updateList();

    savedTasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.classList.add('List-items', 'flex-btw');
      li.draggable = 'false';

      const p = document.createElement('p');
      p.classList.add( 'description', 'bd-ol');

      const checkboxes = document.createElement('input');
      checkboxes.type = 'checkbox';
      checkboxes.className = 'box';
      checkboxes.checked = task.completed;
      if (task.completed === true) {
        checkboxes.checked = p.classList.add('completed');
      }else {
        checkboxes.checked = p.classList.remove('completed');
      }
      checkboxes.addEventListener('change', (e) => {
        statusUpdate(e, i);
        displayAllTask();
      });

      const index = document.createElement('span');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fas', 'fa-ellipsis-v', 'move-item', 'flex-md', 'bd-ol');
      p.addEventListener('keydown', (e) => {
        editTask(e, i);
      });
      button.addEventListener('click', (e) => {
        button.classList.add('fa-trash-alt', 'trash', 'flex-md', 'bd-ol');
        document.querySelector('.fa-trash-alt').addEventListener('click', (e) => {deleteTask(e, i)})
        editTask(e, i);
      });

      p.innerHTML = task.description;

      li.appendChild(checkboxes);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
      ul.appendChild(li);
    });
  }

  // Act
  const addTask = (book) => {
    addTask({
      description: book,
      completed: false,
      index: addIndex(),
    });
    savedTasks.push(book);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    size += 1;
  }

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

// describe('remove method', () => {
//   // Arrange
//   document.body.innerHTML = '<ul class="task-list">'
//   + '<li data-id = "1"><input type="checkbox" checked><p>test 1</p></li>'
//   + '<li data-id = "2"><input type="checkbox"><p>test 1</p></li>'
//   + '<li data-id = "3"><input type="checkbox" checked><p>test 3</p></li>'
//   + '</ul>';

//   const tasksList = document.querySelector('.tasks-list');

//   let toDoList = [
//     {
//       description: 'test 1',
//       completed: false,
//       index: 1,
//     },
//     {
//       description: 'test 2',
//       completed: false,
//       index: 2,
//     },
//     {
//       description: 'test 3',
//       completed: false,
//       index: 3,
//     },
//   ];

//   const localStorage = new LocalStorage();
//   localStorage.setDataLocalStorage(toDoList);

//   const updateArray = () => {
//     const items = [...tasksList.children];

//     toDoList = [];

//     items.forEach((item, index) => {
//       const newTask = {
//         description: item.lastChild.textContent,
//         completed: item.firstChild.checked,
//         index: index + 1,
//       };
//       toDoList.push(newTask);
//     });
//     localStorage.setDataLocalStorage(toDoList);
//   };

//   const taskElem = document.querySelector('li[data-id="3"]');

//   // Act
//   const removeElement = (element) => {
//     if (element) {
//       tasksList.removeChild(element);
//       updateArray();
//       return toDoList;
//     }
//     return false;
//   };

//   // Assert
//   test('remove an element from the array', () => {
//     expect(removeElement(taskElem)).toHaveLength(2);
//   });

//   test('remove element from the list', () => {
//     expect([...tasksList.children].length).toBe(2);
//   });
// });

// describe('local storage management', () => {
//   const localStorage = new LocalStorage();
//   const arr = [{
//     description: 'local storage test',
//     completed: false,
//     index: 1,
//   }];
//   localStorage.setDataLocalStorage(arr);
//   test('it stores items', () => {
//     expect(localStorage.getDataLocalStorage()).toEqual([{
//       description: 'local storage test',
//       completed: false,
//       index: 1,
//     }]);
//   });
// });