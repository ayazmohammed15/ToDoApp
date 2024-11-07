document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskName = document.getElementById('task-name').value;
  const taskTime = document.getElementById('task-time').value;

  if (taskName === '' || taskTime === '') {
    alert('Please enter both task name and time.');
    return;
  }

  const taskList = document.getElementById('task-list');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span>${taskName} (${new Date(taskTime).toLocaleString()})</span>
    <div>
      <button class="complete">Complete</button>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Clear input fields
  document.getElementById('task-name').value = '';
  document.getElementById('task-time').value = '';

  // Mark task as complete
  li.querySelector('.complete').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Edit task
  li.querySelector('.edit').addEventListener('click', () => {
    const newTaskName = prompt('Edit task name:', taskName);
    const newTaskTime = prompt('Edit task time:', taskTime);
    if (newTaskName && newTaskTime) {
      li.querySelector('span').innerHTML = `${newTaskName} (${new Date(newTaskTime).toLocaleString()})`;
    }
  });

  // Delete task
  li.querySelector('.delete').addEventListener('click', () => {
    taskList.removeChild(li);
  });
}
