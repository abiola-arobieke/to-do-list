import './style.css';

const task = JSON.parse(localStorage.getItem('allTask')) || [];
const todoList = document.querySelector('#todo');
const newTask = document.getElementById('new-task');
let moreBtn;
let checkedItem = [];

const loadTask = () => {
  // remove old list item that was created
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }

  // Fetch data, create and insert data newly created elements
  task.forEach((todo, index) => {
    const htmlTemplate = `
      <div class="px-10-py-15 text-gray border-bottom">
          <input type="checkbox" class="checkbox" id="${index}" value="${todo.completed}" />
          <span>${todo.description}</span>
          <del class="hide">
              <span>${todo.description}</span>
          </del>
          <div class="dropdown more">
              <button class="drop-btn border-none bg-white">
                  <i class="fa fa-ellipsis-v text-gray" aria-hidden="true"></i>
              </button>
          </div> 
      </div>
      <div class="edit-container px-10-py-15 text-gray border-bottom bg-yellow hide">
          <input type="checkbox" class="edit-task bg-yellow" id="${index}" 
          value="${todo.completed}" />
          <input class="text-gray edit-input border-none bg-yellow" type="text" 
          value="${todo.description}" />
          <div class="dropdown more">
              <button class="border-none bg-yellow">
                  <i class="fa fa-trash-o ft-20 text-gray" aria-hidden="true"></i>
              </button>
          </div> 
      </div>
    `;
    const liTag = document.createElement('li');
    liTag.innerHTML = htmlTemplate;
    todoList.appendChild(liTag);
  });

  // Get all more buttons
  moreBtn = document.querySelectorAll('.drop-btn');
  moreBtn.forEach((eachMoreBtn, btnIndex) => {
    // toggle more button to edit or delete a task
    eachMoreBtn.addEventListener('click', () => {
      const grandParentElement = eachMoreBtn.parentElement.parentElement;
      const delBtnContainer = grandParentElement.parentElement.lastElementChild;
      const checkClassName = delBtnContainer.className.includes('hide');
      if (checkClassName) {
        delBtnContainer.classList.remove('hide');
        delBtnContainer.classList.add('show');
        grandParentElement.classList.add('hide');

        // Delete a task
        const taskIndex = delBtnContainer.firstElementChild.id;
        const deleteTask = delBtnContainer.lastElementChild.firstElementChild;
        deleteTask.addEventListener('click', () => {
          task.forEach((tas, index) => {
            if (parseInt(taskIndex, 10) === index) {
              task.splice(index, 1);
              localStorage.setItem('allTask', JSON.stringify(task));
              loadTask();
            }
          });
        });
        // Edit a task
        const updateTask = delBtnContainer.firstElementChild.nextElementSibling;
        updateTask.addEventListener('keyup', (event) => {
          if (updateTask.value) {
            if (event.code === 'Enter') {
              const taskData = {
                description: '',
                completed: false,
              };
              taskData.description = updateTask.value;
              task[btnIndex] = taskData;
              updateTask.value = taskData.description;
              localStorage.setItem('allTask', JSON.stringify(task));
              loadTask();
            }
          }
        });
      }
    });
  });
  // check and cross selected item
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const btnGrandParent = event.target.parentElement.parentElement;
      const description = btnGrandParent.firstElementChild.children.item(1);
      const markedDesc = btnGrandParent.firstElementChild.children.item(2);
      const taskID = event.target.id;
      let items;

      if (event.target.checked) {
        event.target.value = true;
        markedDesc.classList.remove('hide');
        description.classList.add('hide');
        checkedItem.push(taskID);
      } else {
        event.target.value = false;
        markedDesc.classList.add('hide');
        description.classList.remove('hide');
        items = checkedItem.filter((i) => !(parseInt(i, 10) === parseInt(taskID, 10)));
        checkedItem = items;
      }
    });
  });
};

// Method for creating new task
const createTask = () => {
  const taskData = {
    description: '',
    completed: false,
  };

  taskData.description = newTask.value;
  task.push(taskData);
  localStorage.setItem('allTask', JSON.stringify(task));
  newTask.value = '';
  loadTask();
};

// Add new task
const addTask = document.getElementById('new-task');
addTask.addEventListener('keyup', (event) => {
  if (newTask.value) {
    if (event.code === 'Enter') {
      createTask();
    }
  }
});

// Delete completed task
const delCheckedTask = document.getElementById('clear-task');
delCheckedTask.addEventListener('click', () => {
  if (task.length !== 0) {
    for (let i = checkedItem.length - 1; i >= 0; i -= 1) {
      task.splice(checkedItem[i], 1);
    }
    localStorage.setItem('allTask', JSON.stringify(task));
    loadTask();
  }
});

loadTask();
