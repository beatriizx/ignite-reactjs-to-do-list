import { CreateTaskInput } from './components/CreateTaskInput';
import logo from './assets/logo.svg';
import styles from './styles/app.styles.module.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
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
    setTasks([...tasks, { id: Math.random(), task: newTask, completed: false }]);
    console.log(tasks);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCheckboxChange = () => {
    
  }

  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <CreateTaskInput onHandleSubmit={handleSubmit} onHandleChange={handleChange} />
      <TasksList tasks={tasks} />
    </div>
  );
};
