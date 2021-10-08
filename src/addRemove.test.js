describe("testing add function", () => {
  const addIndex = () => {
    if (savedTasks.length < 1) {
      return size;
    }
    return savedTasks[savedTasks.length - 1].index + 1;
  }

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

  const displayAllTask = () => {
    ul.innerHTML = '';
    updateList();

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
      const index = document.createElement('span');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fas', 'fa-ellipsis-v', 'move-item', 'flex-md', 'bd-ol');
      button.addEventListener('click', (e) => {
        button.classList.add('fa-trash-alt', 'trash', 'flex-md', 'bd-ol');
        document.querySelector('.fa-trash-alt')
      p.innerHTML = task.description;

      li.appendChild(checkboxes);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
      ul.appendChild(li);
    });
  }
})