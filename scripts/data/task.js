export const task = [];

export function addToTask(taskNameInput, taskDescriptionInput) {
    task.push({
        taskName: `${taskNameInput.value}`,
        taskDescription: `${taskDescriptionInput.value}`
    });
}
