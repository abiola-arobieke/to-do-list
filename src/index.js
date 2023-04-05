import './style.css';

const task = [
  {
    id: 1,
    description: 'Read React documentation',
    completed: true,
  },
  {
    id: 2,
    description: 'Work on the to-do-list app',
    completed: true,
  },
  {
    id: 3,
    description: 'Learn data structure',
    completed: true,
  },
  {
    id: 4,
    description: 'Update my resume',
    completed: true,
  },
  {
    id: 5,
    description: 'Doctors appointment',
    completed: true,
  },
];

const taskList = () => {
  const todoList = document.querySelector('#todo');
  task.forEach((todo) => {
    const htmlTemplate = `
          <input type="checkbox" class="checkbox" id="${todo.id}" value="${todo.completed}">
          <span>${todo.description}</span>
          <i class="fa fa-ellipsis-v more" aria-hidden="true"></i>`;
    const liTag = document.createElement('li');
    liTag.innerHTML = htmlTemplate;
    todoList.appendChild(liTag);
  });
};

taskList();
