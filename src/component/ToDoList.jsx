import {useState} from "react";
import styles from './Todo.module.scss'
import {useTodos} from "./Store.js";

export default function TodoList() {
    // const [tasks, setTasks] = useState(['Eat Breakfast', 'Take a shower']);
    // const [newTask, setNewTask] = useState('');

    const {tasks, newTasks,setTasks,setNewTask} = useTodos()

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTasks.trim() !== '') {
            setTasks([...tasks, newTasks])
            setNewTask('')
        }

    }

    function deleteTask(index) {

        const updateTasks = tasks.filter((element, i) => i !== index);
        setTasks(updateTasks);

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]];
            setTasks(updateTask)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
            setTasks(updateTask)
        }
    }

    return (
        <>
            <div className={styles.todoList}>
                <h1>To-Do-List</h1>

                <div>
                    <input type='text'
                           placeholder='Enter task name...'
                           value={newTasks}
                           onChange={handleInputChange}
                    />
                    <button className={styles.addButton}
                            onClick={addTask}>
                        Add
                    </button>
                    <ol>
                        {tasks.map((task, index) => <li key={index}><span className={styles.text}>{task}</span>
                            <button className={styles.deleteButton} onClick={() => deleteTask(index)}>❌</button>
                            <button className={styles.moveUpButton} onClick={() => moveTaskUp(index)}>👍</button>
                            <button className={styles.moveDownButton} onClick={() => moveTaskDown(index)}>👎</button>

                        </li>)}
                    </ol>
                </div>
            </div>
        </>
    )
}