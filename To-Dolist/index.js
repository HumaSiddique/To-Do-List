
function push() {
  let taskInput = document.getElementById('list');
  let taskList = document.getElementById('taskList');
  let task = taskInput.value.trim();

  if (task) {
      const taskContainer = document.createElement('div');
      taskContainer.className = 'task-item';

      // Create task text element
      const taskText = document.createElement('span');
      taskText.textContent = task;
      taskContainer.appendChild(taskText);

      // Create edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-button';
      editButton.onclick = function () {
          // Handle edit functionality here
          let newText = prompt('Edit task:', taskText.textContent);
          if (newText !== null) {
              taskText.textContent = newText;
          }
      };
      taskContainer.appendChild(editButton);

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button';
      deleteButton.onclick = function () {
          // Handle delete functionality here
          taskContainer.remove();
      };
      taskContainer.appendChild(deleteButton);

      // Append task container to the task list
      taskList.appendChild(taskContainer);

      taskInput.value = ''; // Clear the input field
  } else {
      alert('Please enter a task.');
  }
}









