export default function updateStatus(event) {
  event.target.nextElementSibling.classList.toggle('completed');
  const status = JSON.parse(localStorage.getItem('toDo'));
  status[event.target.dataset.id].completed = event.target.checked;
  localStorage.setItem('toDo', JSON.stringify(status));
}