document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('task-form');
  const taskTitle = document.getElementById('task-title');
  const taskDesc = document.getElementById('task-desc');
  const taskDate = document.getElementById('task-date');
  const taskList = document.getElementById('task-list');

  // Function to create a task element
  function createTaskElement(task) {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
          <h3>${task.title}</h3>
          <p class="task-details">${task.description}</p>
          <p class="task-details">Due: ${task.dueDate}</p>
          <div class="task-actions">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
          </div>
      `;
      return taskElement;
  }

  // Function to add a new task
  function addTask(task) {
      const taskElement = createTaskElement(task);

      // Edit task
      taskElement.querySelector('.edit-button').addEventListener('click', function() {
          taskTitle.value = task.title;
          taskDesc.value = task.description;
          taskDate.value = task.dueDate;
          taskList.removeChild(taskElement);
      });

      // Delete task
      taskElement.querySelector('.delete-button').addEventListener('click', function() {
          taskList.removeChild(taskElement);
      });

      taskList.appendChild(taskElement);
  }

  // Handle form submission
  taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const task = {
          title: taskTitle.value.trim(),
          description: taskDesc.value.trim(),
          dueDate: taskDate.value,
      };
      if (task.title && task.description && task.dueDate) {
          addTask(task);
          taskTitle.value = '';
          taskDesc.value = '';
          taskDate.value = '';
      }
  });
});
