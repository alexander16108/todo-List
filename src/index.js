import newTask from './addRemove';

document.getElementById('add-task').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const v = e.target.value;
    e.target.value = '';
    e.preventDefault();
    newTask(v);
  }
});