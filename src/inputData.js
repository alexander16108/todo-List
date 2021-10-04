let arr = 0;

const todo = [
  {
    description: 'take a nap',
    completed: false,
    id: 0,
    index: 0,
  },
  {
    description: 'take a bath',
    completed: true,
    id: 1,
    index: 1,
  },
  {
    description: 'make breakfast',
    completed: true,
    id: 2,
    index: 2,
  },
  {
    description: 'feed the dogs',
    completed: false,
    id: 3,
    index: 3,
  },
];

export function ImplementList(item) {
  let storage;
  try {
    storage = window[item];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

if (ImplementList('localStorage')) {
  arr = JSON.parse(localStorage.getItem('Task-Items'));
  if (arr === null) {
    arr = todo;
  }
} else {
  arr = todo;
}

export function save(content) {
  localStorage.setItem('Task-Items', JSON.stringify(content));
}

export function load() {
  const content = JSON.parse(localStorage.getItem('infomation'));
  return content;
}

export const ToDo = arr;