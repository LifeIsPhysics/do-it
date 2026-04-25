export const UIFactory = {
  createAddTaskButton: function() {
    return `
      <button class="add-task-btn" id="global-add-task">
        <span class="material-symbols-rounded">add</span>
        <span class="label">Add task</span>
      </button>
    `;
  },

  createSidebarItem: function(id, label, iconName) {
    return `
      <button class="nav-item" data-tab="${id}">
        <span class="material-symbols-rounded icon-size">${iconName}</span>
        <span class="label">${label}</span>
      </button>
    `;
  },

  createMainLayout: function(title) {
    return `
      <header class="main-header">
        <h1>${title}</h1>
      </header>
      <div class="task-list-container">
      </div>
    `;
  },


  createToDoLayout: function(id, title, description, dueDate, priority) {
    return `
      <div class="todo-item" data-tab="${id}">
        <div class="todo-title">${title}</div>
        <div class="todo-description">${description}</div>
        <span class="todo-dueDate">${dueDate}</span>
        <span class="priority">${priority}</span>
      </div>
    `;
  }
};