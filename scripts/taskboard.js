// Drop down menu variables
const priorityOption = document.querySelector('.js-task-input-priority');
const taskFilter = document.querySelector('.js-task-filter');

// Task input variables
const taskNameInput = document.querySelector('.js-task-input-name');
const taskDescriptionInput = document.querySelector('.js-task-input-description');

// add button variable
const addButton = document.querySelector('.js-task-input-add-button');

// Task container variables
const highPriorityTaskContainer = document.querySelector('.js-high-priority-task-container');
const mediumPriorityTaskContainer = document.querySelector('.js-medium-priority-task-container');
const lowPriorityTaskContainer = document.querySelector('.js-low-priority-task-container');
const highfutureSectionContainer = document.querySelector('.js-future-section-container-high');
const mediumfutureSectionContainer = document.querySelector('.js-future-section-container-medium');
const lowfutureSectionContainer = document.querySelector('.js-future-section-container-low');

//Task priority header variables
const highPriorityTaskHeader = document.querySelector('.js-high-priority-task-header');
const mediumPriorityTaskHeader = document.querySelector('.js-medium-priority-task-header');
const lowPriorityTaskHeader = document.querySelector('.js-low-priority-task-header');


// Function for filter

function filterElements() {
    if (taskFilter.value === "High") {
        //headers
        highPriorityTaskHeader.classList.remove('hidden');
        mediumPriorityTaskHeader.classList.add('hidden');
        lowPriorityTaskHeader.classList.add('hidden');
        //containers
        highPriorityTaskContainer.classList.remove('hidden');
        mediumPriorityTaskContainer.classList.add('hidden');
        lowPriorityTaskContainer.classList.add('hidden');
        //futuresection containers
        highfutureSectionContainer.classList.remove('hidden');
        mediumfutureSectionContainer.classList.add('hidden');
        lowfutureSectionContainer.classList.add('hidden');
    } else if (taskFilter.value === "Medium") {
        //headers
        highPriorityTaskHeader.classList.add('hidden');
        mediumPriorityTaskHeader.classList.remove('hidden');
        lowPriorityTaskHeader.classList.add('hidden');
        //containers
        highPriorityTaskContainer.classList.add('hidden');
        mediumPriorityTaskContainer.classList.remove('hidden');
        lowPriorityTaskContainer.classList.add('hidden');
        //futuresection containers
        highfutureSectionContainer.classList.add('hidden');
        mediumfutureSectionContainer.classList.remove('hidden');
        lowfutureSectionContainer.classList.add('hidden');
    } else if (taskFilter.value === "Low") {
        //headers
        highPriorityTaskHeader.classList.add('hidden');
        mediumPriorityTaskHeader.classList.add('hidden');
        lowPriorityTaskHeader.classList.remove('hidden');
        //containers
        highPriorityTaskContainer.classList.add('hidden');
        mediumPriorityTaskContainer.classList.add('hidden');
        lowPriorityTaskContainer.classList.remove('hidden');
        //futuresection containers
        highfutureSectionContainer.classList.add('hidden');
        mediumfutureSectionContainer.classList.add('hidden');
        lowfutureSectionContainer.classList.remove('hidden');
    } else if (taskFilter.value === "All") {
        //headers
        mediumPriorityTaskHeader.classList.remove('hidden');
        highPriorityTaskHeader.classList.remove('hidden');
        lowPriorityTaskHeader.classList.remove('hidden');
        //containers
        mediumPriorityTaskContainer.classList.remove('hidden');
        highPriorityTaskContainer.classList.remove('hidden');
        lowPriorityTaskContainer.classList.remove('hidden');
        //futuresection containers
        highfutureSectionContainer.classList.remove('hidden');
        mediumfutureSectionContainer.classList.remove('hidden');
        lowfutureSectionContainer.classList.remove('hidden');
    }

}

//Funtions that creates the elements based on priority level
function addHighPriorityTask () {
    let highPriorityTask = document.createElement('div');
    highPriorityTask.classList.add('high-priority-task');

    let grid1 = document.createElement('div');
    grid1.classList.add('grid-1');
    highPriorityTask.appendChild(grid1);

    let taskName = document.createElement('p');
    taskName.classList.add('high-priority-task-name');
    taskName.innerText = `${taskNameInput.value}`;
    grid1.appendChild(taskName);

    let taskDescription = document.createElement('p');
    taskDescription.classList.add('high-priority-task-description');
    taskDescription.innerText = `${taskDescriptionInput.value}`;
    grid1.appendChild(taskDescription);

    let grid2 = document.createElement('div');
    grid2.classList.add('grid-2');
    highPriorityTask.appendChild(grid2);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = `Delete`;
    deleteButton.classList.add('high-priority-task-delete-button');
    grid2.appendChild(deleteButton);

    highPriorityTaskContainer.appendChild(highPriorityTask);

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;

        target.parentElement.parentElement.remove();
    });

    if(highPriorityTaskContainer === "") {
        highfutureSectionContainer.classList.remove('hidden-again');
    } else {
        highfutureSectionContainer.classList.add('hidden-again');
    }
}


function addMediumPriorityTask () {
    let mediumPriorityTask = document.createElement('div');
    mediumPriorityTask.classList.add('medium-priority-task');

    let grid1 = document.createElement('div');
    grid1.classList.add('grid-1');
    mediumPriorityTask.appendChild(grid1);

    let taskName = document.createElement('p');
    taskName.classList.add('medium-priority-task-name');
    taskName.innerText = `${taskNameInput.value}`;
    grid1.appendChild(taskName);

    let taskDescription = document.createElement('p');
    taskDescription.classList.add('medium-priority-task-description');
    taskDescription.innerText = `${taskDescriptionInput.value}`;
    grid1.appendChild(taskDescription);

    let grid2 = document.createElement('div');
    grid2.classList.add('grid-2');
    mediumPriorityTask.appendChild(grid2);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = `Delete`;
    deleteButton.classList.add('medium-priority-task-delete-button');
    grid2.appendChild(deleteButton);

    mediumPriorityTaskContainer.appendChild(mediumPriorityTask);

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;

        target.parentElement.parentElement.remove();
    });

    if(mediumPriorityTaskContainer === "") {
        mediumfutureSectionContainer.classList.remove('hidden-again');
    } else {
        mediumfutureSectionContainer.classList.add('hidden-again');
    }
}

function addLowPriorityTask () {
    let lowPriorityTask = document.createElement('div');
    lowPriorityTask.classList.add('low-priority-task');

    let grid1 = document.createElement('div');
    grid1.classList.add('grid-1');
    lowPriorityTask.appendChild(grid1);

    let taskName = document.createElement('p');
    taskName.classList.add('low-priority-task-name');
    taskName.innerText = `${taskNameInput.value}`;
    grid1.appendChild(taskName);

    let taskDescription = document.createElement('p');
    taskDescription.classList.add('high-priority-task-description');
    taskDescription.innerText = `${taskDescriptionInput.value}`;
    grid1.appendChild(taskDescription);

    let grid2 = document.createElement('div');
    grid2.classList.add('grid-2');
    lowPriorityTask.appendChild(grid2);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = `Delete`;
    deleteButton.classList.add('low-priority-task-delete-button');
    grid2.appendChild(deleteButton);

    lowPriorityTaskContainer.appendChild(lowPriorityTask);

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;

        target.parentElement.parentElement.remove();
    });

    if(lowPriorityTaskContainer === "") {
        lowfutureSectionContainer.classList.remove('hidden-again');
    } else {
        lowfutureSectionContainer.classList.add('hidden-again');
    }
}

// event listener that adds the task onclick based on priority
addButton.addEventListener('click', () => {
    if (taskNameInput.value === "" && taskDescriptionInput.value === "") {
        alert('Enter a task');
    } else if (priorityOption.value === "High") {
        addHighPriorityTask();
    } else if (priorityOption.value === "Medium") {
        addMediumPriorityTask();
    } else if (priorityOption.value === "Low") {
        addLowPriorityTask();
    } else {
        alert('Select Priority');
    }

    taskNameInput.value = "";
    taskDescriptionInput.value = "";
});