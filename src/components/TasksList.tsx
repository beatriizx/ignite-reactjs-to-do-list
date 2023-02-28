import deleteIcon from '../assets/delete.svg';
import styles from '../styles/TaskList.module.scss';
import folderIcon from '../assets/folder.svg';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  handleTaskStatusChange?: any;
  handleDeleteTask?: any;
}

export const TasksList = ({ tasks, handleTaskStatusChange, handleDeleteTask }: TaskListProps) => {
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter((item) => item.completed).length;
  const emptyList = (
    <div className={styles.emptyList}>
      <img src={folderIcon} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );

  const list = tasks.map((task) => (
    <li key={task.id}>
      <div>
        <div className={styles.customCheckbox}>
          <input
            id={task.id.toString()}
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() => {
              handleTaskStatusChange(task.id);
            }}
          />
          <label htmlFor={task.id.toString()}></label>
        </div>
        <p>{task.task}</p>
      </div>
      <button
        onClick={() => {
          handleDeleteTask(task.id);
        }}
      >
        <img src={deleteIcon} alt="" />
      </button>
    </li>
  ));

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

      <ul>{tasks.length ? list : emptyList}</ul>
    </div>
  );
};
