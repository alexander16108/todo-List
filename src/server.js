
function statusUpdate(e, i) {
  const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  savedTasks[i].completed = !savedTasks[i].completed;
  e.target.checked = savedTasks[i].completed;
  localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
}
export default statusUpdate;