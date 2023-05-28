/** @format */

import { CreateTaskInput } from './components/CreateTaskInput';
import logo from './assets/logo.svg';
import styles from './styles/app.styles.module.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TasksList } from './components/TasksList';
interface Task {
	id: number;
	task: string;
	completed: boolean;
}

export const App = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const newArray = [...tasks, { id: Math.random(), task: newTask, completed: false }];
		setTasks(newArray);
		updateLocalStorage(newArray);
	};

	const handleDeleteTask = (id: number) => {
		const newArray = tasks.filter((item) => {
			return item.id != id;
		});

		setTasks(newArray);
		updateLocalStorage(newArray);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTask(event.target.value);
	};

	const handleTaskStatusChange = (currentID: number) => {
		const newTasks = tasks.map((item) => {
			if (item.id === currentID) item.completed = !item.completed;
			return item;
		});

		setTasks(newTasks);
		updateLocalStorage(newTasks);
	};

	const updateLocalStorage = (tasks: Task[]) => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	};

	useEffect(() => {
		const tasks = localStorage.getItem('tasks');
		if (tasks) {
			setTasks(JSON.parse(tasks));
		}
	}, []);

	return (
		<div className={styles.container}>
			<img
				src={logo}
				alt=''
			/>
			<CreateTaskInput
				onHandleSubmit={handleSubmit}
				onHandleChange={handleChange}
			/>
			<TasksList
				tasks={tasks}
				handleTaskStatusChange={handleTaskStatusChange}
				handleDeleteTask={handleDeleteTask}
			/>
		</div>
	);
};
