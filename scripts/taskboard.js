import { addToTask, addHighPriorityTask, addMediumPriorityTask, addLowPriorityTask} from "./data/task.js";

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

//event listener for filter 
taskFilter.addEventListener('click', () => {
    filterElements();
});

// Loads the dom if there's a task in localstorage
addHighPriorityTask (highfutureSectionContainer);
addMediumPriorityTask (mediumfutureSectionContainer);
addLowPriorityTask (lowfutureSectionContainer);

// event listener that adds the task onclick based on priority
addButton.addEventListener('click', () => {

    addToTask(taskNameInput, taskDescriptionInput, priorityOption); // stores the task in the task array
    
    if (taskNameInput.value === "" && taskDescriptionInput.value === "") {
        alert('Enter a task');
    } else if (priorityOption.value === "High") {
        addHighPriorityTask (highfutureSectionContainer);
    } else if (priorityOption.value === "Medium") {
        addMediumPriorityTask (mediumfutureSectionContainer);
    } else if (priorityOption.value === "Low") {
        addLowPriorityTask (lowfutureSectionContainer);
    } else {
        alert('Select Priority');
    }

    taskNameInput.value = "";
    taskDescriptionInput.value = "";
});