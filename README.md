# Priority Task Board

A simple and clean task management web application that helps you organize and track tasks by priority level. Add tasks, categorize them as high, medium, or low priority, filter by priority, and delete tasks when they're complete.

## What Is This Project?

The Priority Task Board is a beginner-friendly web app that lets you manage your daily tasks in one place. Instead of having tasks scattered everywhere, you can add them here, assign a priority level, and see them organized into three clear sections. Your tasks are saved in your browser, so they stay there even after you close the page.

## Features

- **Add Tasks**: Enter a task name, description, and priority level
- **Organize by Priority**: Tasks automatically sort into High, Medium, and Low priority sections
- **Filter Tasks**: View only tasks of a specific priority level, or see all tasks at once
- **Delete Tasks**: Remove completed or unwanted tasks with a single click
- **Persistent Storage**: Your tasks are saved locally in your browser and won't disappear when you refresh
- **Clean Design**: Simple and modern interface that works smoothly on desktop

## How to Use

1. **Add a Task**:
   - Type your task name in the "Task name" field
   - Type a description (optional but helpful)
   - Select a priority level (High, Medium, or Low)
   - Click the "Add Task" button

2. **View Your Tasks**:
   - Tasks appear in their matching priority section
   - Each task shows the name, description, and a delete button

3. **Filter Tasks**:
   - Use the "Filter by Priority" dropdown to view tasks by priority
   - Select "All" to see everything at once

4. **Delete a Task**:
   - Click the "Delete" button on any task to remove it

## Project Structure

```
taskboard/
├── index.html              # Main HTML file
├── style/
│   └── taskboard.css       # All styling
└── scripts/
    ├── taskboard.js        # Main app logic and event listeners
    └── data/
        └── task.js         # Task storage and rendering functions
```

## How It Works

**localStorage**: All your tasks are stored in your browser's localStorage. This means:
- Your tasks stay even after you close the browser
- Each browser has its own separate task list
- Clearing browser data will delete your tasks

**Task Structure**: Each task has:
- A unique ID (created when you add it)
- Name (what the task is)
- Description (details about the task)
- Priority (high, medium, or low)

**Dynamic Rendering**: When you add or delete a task, the page automatically updates to show your changes without needing to refresh.

## Technologies Used

- HTML5
- CSS3 (with CSS custom properties for easy color management)
- JavaScript (ES6 modules)
- localStorage API
- Google Fonts (Roboto font family)

## Color System

- **High Priority**: Red (#E63946)
- **Medium Priority**: Orange (#F77F00)
- **Low Priority**: Green (#06A77D)

## Getting Started

1. Clone or download this project
2. Open in your browser using Live server
3. Start adding tasks!

No installation or setup required. It runs completely in your browser.

## Browser Compatibility

Works on all modern browsers that support:
- ES6 modules
- localStorage API
- CSS Grid

## Future Ideas

- Add due dates to tasks
- Mark tasks as complete without deleting
- Export tasks as a file
- Dark mode theme
- Mobile responsive design improvements

## Notes

This project uses vanilla JavaScript with no external libraries. It's designed to be easy to understand and modify if you want to add more features.

---

Made with simplicity and functionality in mind.
