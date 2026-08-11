const task = JSON.parse(localStorage.getItem('task')) || [];

// This function adds the task inputs to the task array. Stores the tasks so they can be used to generate the html
export function addToTask(taskNameInput, taskDescriptionInput, priorityOption) {
    task.push({
        id: Date.now(), // adds a unique id based on when the task was added
        name: `${taskNameInput.value}`,
        description: `${taskDescriptionInput.value}`,
        priority: `${priorityOption.value}`
    });

    saveToStorage(); //updates the storage everytime a new task is added
}

//Funtion that generates the html based on priority level
// This function when called upon, accepts the priority as a parameter and uses it to generate the html of the tasks stored in the array based on their priority level
// All the classes are generated from the priority using the same structure 
export function addTask (priority, futureSectionContainer) {
    const deleteButtonClass = `${priority}-priority-task-delete-button`;
    const taskContainer = document.querySelector(
        `.js-${priority}-priority-task-container`
    );

    // separate variables for the priority html for easy assignment
    let highTaskHTML = '';
    let mediumTaskHTML = '';
    let lowTaskHTML = '';

    //this function loops through each task in the task array and generates the html.
    task.forEach((taskObject) => {
        const {name, description, priority, id} = taskObject;
    
        const html = `
        <div class="${priority}-priority-task">
            <div class="grid-1">
            <p class="${priority}-priority-task-name">${name}</p>
            <p class="${priority}-priority-task-description">${description}</p>
            </div>

            <div class="grid-2">
            <button class="${priority}-priority-task-delete-button" data-task-id="${id}">Delete</button>
            </div>
        </div>
        `;

        // after generating the html, it then assigns it to the correct html variable based on priority
        if (priority === "high") {
            highTaskHTML += html;
        } else if (priority === "medium"){
            mediumTaskHTML += html;
        } else if (priority === "low") {
            lowTaskHTML += html;
        }
    
    });

    // this assigns the html variables to their containers based on priority
    if (priority === "high") {
        taskContainer.innerHTML = highTaskHTML;
    } else if (priority === "medium"){
        taskContainer.innerHTML = mediumTaskHTML;
    } else if (priority === "low") {
        taskContainer.innerHTML = lowTaskHTML;
    }
    

    // loops through each delete button and adds a click event listener to delete from the task array
    document.querySelectorAll(`.${deleteButtonClass}`).forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            // finds the correct index of the clicked button using the assigned data id
            const clickedId = parseInt(deleteButton.dataset.taskId);
            const index = task.findIndex(taskObject => taskObject.id === clickedId);

            task.splice(index, 1); // deletes from the array using the correct index
            saveToStorage(); // updates the storage after deleting
            addTask(priority, futureSectionContainer); // updates the page
        });
    });

    // checks the taskContainer and hides the futuresection when it is not empty
    if(taskContainer.innerHTML != '') {
        futureSectionContainer.classList.add('hidden-again'); // adds the hidden class when a task is added
    }
}

// saves the task array to local storage
function saveToStorage () {
    localStorage.setItem('task', JSON.stringify(task));
}

// I chose localStorage over sessionStorage because of the nature of the project, it is a task board and we assume the user wants the data to be saved for as long they want it to be available. So the task doesn't get deleted automatically until the user deletes it manually unlike session storage which is used in cases where the data is to be saved only during that active session.