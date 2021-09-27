let target;

function routing(source, target) {
  const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  if (savedTasks.length < 2) return;

  const sourceA = savedTasks[source];
  const sourceB = savedTasks[source].index;
  let targetPointer;
  // eslint-disable-next-line array-callback-return
  savedTasks.map((object) => {
    if (object.index === Number(target)) {
      targetPointer = savedTasks.indexOf(object);
    }
  });
  savedTasks[source].index = savedTasks[targetPointer].index;
  savedTasks[targetPointer].index = sourceB;

  savedTasks[source] = savedTasks[targetPointer];
  savedTasks[targetPointer] = sourceA;
  localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
}

export default function dragDrop(event, index) {
  const Event = event.type;
  const source = index;
  switch (Event) {
    case 'dragstart':
      event.target.classList.add('active-content');
      break;
    case 'dragend':
      event.target.classList.remove('active-content');
      routing(source, target);
      break;
    case 'dragover':
      if (event.target.className === 'List-items') {
        target = event.target.children[2].innerHTML;
      }
      break;
    default:
      break;
  }
}
