/**
 * @jest-environment jsdom
 */

describe('test add elements', () => {
  document.body.innerHTML = '<div>'
  + '<input type="text" name="task" id="task"'
  + 'class="input-task element-border" placeholder="Add to your list..." value="add testing">'
  + '<ul class="tasks-list">'
  + '</ul>'
  + '</div>';

  const ul = document.querySelector('.task-list');
  let size = 0;
  let savedTasks = [];

  const displayAllTask = () => {
    ul.innerHTML = '';
    savedTasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.classList.add('List-items', 'flex-btw');

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
  }

  const addIndex = () => {
    if (savedTasks.length < 1) {
      return size;
    }
    return savedTasks[savedTasks.length - 1].index + 1;
  }

  // Act
  const addTask = (book) => {
    addTask({
      description: book,
      completed: false,
      index: addIndex(),
    });
    savedTasks.push(book);
    // localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    size += 1;
  }

  // Assert

  test('it adds the task to the list in the dom', () => {
    expect(addIndex().length !== 0).toBeTruthy();
  });
});
