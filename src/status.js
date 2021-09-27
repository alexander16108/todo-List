function updateStatus(e, i) {
  const savedTasks = JSON.parse(localStorage.getItem('taskContent'));
  savedTasks[i].completed = !savedTasks[i].completed;
  e.target.checked = savedTasks[i].completed;
  localStorage.setItem('taskContent', JSON.stringify(savedTasks));
}
export default updateStatus;