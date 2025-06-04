const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filename = 'todo.json';

function loadTasks() {
    try {
        const data = fs.readFileSync(filename, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(filename, JSON.stringify(tasks, null, 2));
}

function showTasks(tasks) {
    if (tasks.length === 0) {
        console.log('No tasks yet!');
        return;
    }
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.text}`);
    });
}

function addTask(tasks, text) {
    tasks.push({ text: text, completed: false });
    saveTasks(tasks);
    console.log('Task added.');
}

function completeTask(tasks, index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        saveTasks(tasks);
        console.log('Task completed.');
    } else {
        console.log('Invalid task number.');
    }
}

function deleteTask(tasks, index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log('Task deleted.');
    } else {
        console.log('Invalid task number.');
    }
}

function askQuestion(query) {
    return new Promise(resolve => {
        readline.question(query, resolve);
    });
}

async function main() {
    let tasks = loadTasks();

    while (true) {
        console.log('\nOptions:');
        console.log('1. Show tasks');
        console.log('2. Add task');
        console.log('3. Complete task');
        console.log('4. Delete task');
        console.log('5. Exit');

        const choice = await askQuestion('Enter your choice: ');

        switch (choice) {
            case '1':
                showTasks(tasks);
                break;
            case '2':
                const text = await askQuestion('Enter task description: ');
                addTask(tasks, text);
                break;
            case '3':
                showTasks(tasks);
                const completeIndex = await askQuestion('Enter task number to complete: ');
                completeTask(tasks, parseInt(completeIndex) - 1);
                break;
            case '4':
                showTasks(tasks);
                const deleteIndex = await askQuestion('Enter task number to delete: ');
                deleteTask(tasks, parseInt(deleteIndex) - 1);
                break;
            case '5':
                console.log('Exiting...');
                readline.close();
                return;
            default:
                console.log('Invalid choice.');
        }
    }
}

main();