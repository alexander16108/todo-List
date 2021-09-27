import './style.css';

const container = document.getElementById('output-container');
const content = [
  {
    index: 0,
    completed: true,
    description: 'wash the dishes',
  },
  {
    index: 1,
    completed: false,
    description: 'wash the dishes',
  },
  {
    index: 2,
    completed: true,
    description: 'wash the dishes',
  },
  {
    index: 3,
    completed: false,
    description: 'wash the dishes',
  },
];

function displayTask() {
  if (content !== []) {
    content.forEach((element) => {
      const structure = ` <li class='List-items' id='${element.index}'>
                   <input type='checkbox' class='box' data-id='${element.index
        }'  ${element.completed ? "checked" : ""}>
                   <input type='text' value='${element.description
        }' data-index='${element.index}' class='description ${element.completed ? "completed" : ""
        }'>
                   <i class='fas fa-ellipsis-v move-element' data-id='${element.index
        }'></i>
                   </li>
                   <hr>
                   `;
      container.innerHTML += structure;
    });
  }
}
console.log(container);

displayTask();
