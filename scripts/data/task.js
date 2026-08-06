const task = JSON.parse(localStorage.getItem('task'));

if (!task) {
    task = [];
}

export function addToTask(taskNameInput, taskDescriptionInput, priorityOption) {
    task.push({
        id: Date.now(), // adds a unique id based on when the task was added
        name: `${taskNameInput.value}`,
        description: `${taskDescriptionInput.value}`,
        priority: `${priorityOption.value}`
    });

    saveToStorage();
}

//Funtions that creates the elements based on priority level
export function addHighPriorityTask (highfutureSectionContainer) {
    let highPriorityTaskHTML = '';

    task.forEach((taskObject) => {
        const {name, description, priority, id} = taskObject;
    
        if (priority === "High") {
            const html = `
            <div class="high-priority-task">
                <div class="grid-1">
                <p class="high-priority-task-name">${name}</p>
                <p class="high-priority-task-description">${description}</p>
                </div>

                <div class="grid-2">
                <button class="high-priority-task-delete-button" data-task-id="${id}">Delete</button>
                </div>
            </div>
            `;

            highPriorityTaskHTML += html;
        }

        
    });

    document.querySelector('.js-high-priority-task-container').innerHTML = highPriorityTaskHTML;

    document.querySelectorAll('.high-priority-task-delete-button').forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const clickedId = parseInt(deleteButton.dataset.taskId);
            const index = task.findIndex(taskObject => taskObject.id === clickedId);

            task.splice(index, 1);
            saveToStorage();
            addHighPriorityTask (highfutureSectionContainer);
        });
    });

    if(highPriorityTaskHTML != '') {
        highfutureSectionContainer.classList.add('hidden-again'); // adds the hidden class when a task is added
    }
}


export function addMediumPriorityTask (mediumfutureSectionContainer) {
    let mediumPriorityTaskHTML = '';

    task.forEach((taskObject, index) => {
        const {name, description, priority, id} = taskObject;
    
        if (priority === "Medium") {
            const html = `
            <div class="medium-priority-task">
                <div class="grid-1">
                <p class="medium-priority-task-name">${name}</p>
                <p class="medium-priority-task-description">${description}</p>
                </div>

                <div class="grid-2">
                <button class="medium-priority-task-delete-button" data-task-id="${id}">Delete</button>
                </div>
            </div>
            `;

            mediumPriorityTaskHTML += html;
        }

        
    });

    document.querySelector('.js-medium-priority-task-container').innerHTML = mediumPriorityTaskHTML;

    document.querySelectorAll('.medium-priority-task-delete-button').forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const clickedId = parseInt(deleteButton.dataset.taskId);
            const index = task.findIndex(taskObject => taskObject.id === clickedId);

            task.splice(index, 1);
            saveToStorage();
            addMediumPriorityTask (mediumfutureSectionContainer);
        });
    });

    if(mediumPriorityTaskHTML != '') {
        mediumfutureSectionContainer.classList.add('hidden-again');
    }
}


export function addLowPriorityTask (lowfutureSectionContainer) {
    let lowPriorityTaskHTML = '';

    task.forEach((taskObject) => {
        const {name, description, priority, id} = taskObject;
    
        if (priority === "Low") {
            const html = `
            <div class="low-priority-task">
                <div class="grid-1">
                <p class="low-priority-task-name">${name}</p>
                <p class="low-priority-task-description">${description}</p>
                </div>

                <div class="grid-2">
                <button class="low-priority-task-delete-button" data-task-id="${id}">Delete</button>
                </div>
            </div>
            `;

            lowPriorityTaskHTML += html;
        }

        
    });

    document.querySelector('.js-low-priority-task-container').innerHTML = lowPriorityTaskHTML;

    document.querySelectorAll('.low-priority-task-delete-button').forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const clickedId = parseInt(deleteButton.dataset.taskId);
            const index = task.findIndex(taskObject => taskObject.id === clickedId);

            task.splice(index, 1);
            saveToStorage();
            addLowPriorityTask (lowfutureSectionContainer);
        });
    });

    if(lowPriorityTaskHTML != '') {
        lowfutureSectionContainer.classList.add('hidden-again');
    }
}

function saveToStorage () {
    localStorage.setItem('task', JSON.stringify(task));
}