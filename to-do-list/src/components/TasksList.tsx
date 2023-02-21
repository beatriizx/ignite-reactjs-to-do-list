import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from '../styles/TaskList.module.scss';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  handleChange?: any;
}

export const TasksList = ({ tasks, handleChange }: TaskListProps) => {
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter((item) => item.completed).length;

  return (
    <div className={styles.container}>
      <div>
        <span>
          Tarefas criadas <b>{tasksAmount}</b>
        </span>
        <span>
          Concluidas{' '}
          <b>
            {completedTasks} {completedTasks > 0 && `de ${tasksAmount}`}{' '}
          </b>
        </span>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className={styles.customCheckbox}>
              <input
                id={task.id.toString()}
                type="checkbox"
                defaultChecked={task.completed}
                onChange={() => {
                  handleChange(task.id);
                }}
              />
              <label htmlFor={task.id.toString()}></label>
            </div>
            <p>{task.task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
