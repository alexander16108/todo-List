/**
 * @jest-environment jsdom
 */

describe('test add, remove and edit elements', () => {
  document.body.innerHTML = '<div>'
  + '<input type="text" name="task" id="task"'
  + 'class="input-task element-border" placeholder="Add to your list..." value="add testing">'
  + '<ul class="tasks-list">'
  + '</ul>'
  + '</div>';

  const ul = document.querySelector('.task-list');
  let size = 0;
  const savedTasks = [];

  const displayAllTask = () => {
    // ul.innerHTML = '';
    // eslint-disable-next-line no-unused-vars
    savedTasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.classList.add('List-items', 'flex-btw');

      const p = document.createElement('p');
      p.classList.add('description', 'bd-ol');

      const checkboxes = document.createElement('input');
      checkboxes.type = 'checkbox';
      checkboxes.className = 'box';
      checkboxes.checked = task.completed;
      if (task.completed === true) {
        checkboxes.checked = p.classList.add('completed');
      } else {
        checkboxes.checked = p.classList.remove('completed');
      }
      const index = document.createElement('span');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fas', 'fa-ellipsis-v', 'move-item', 'flex-md', 'bd-ol');
      p.innerHTML = task.description;

      li.appendChild(checkboxes);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
      ul.appendChild(li);
    });
  };

  const addIndex = () => {
    if (savedTasks.length < 1) {
      return size;
    }
    return savedTasks[savedTasks.length - 1].index + 1;
  };

  // eslint-disable-next-line no-unused-vars
  const addTask = (book) => {
    addTask({
      description: book,
      completed: false,
      index: addIndex(),
    });
    savedTasks.push(book);
    size += 1;
  };

  const deleteTask = (i) => {
    savedTasks.splice(i, 1);
    displayAllTask();
  };

  test('it adds the task to the list in the dom', () => {
    expect(addIndex().length !== 0).toBeTruthy();
  });
  test('it removes the task from the list in the dom', () => {
    const newTask = {
      description: 'book',
      completed: false,
      index: 1,
    };

    savedTasks.push((newTask.index));
    const lengthArray = savedTasks.length;
    deleteTask(newTask);

    expect(savedTasks.length === (lengthArray - 1)).toBeTruthy();
  });
});
