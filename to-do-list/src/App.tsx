import { CreateTaskInput } from './components/CreateTaskInput';
import styles from './styles/app.styles.module.scss';
export const App = () => {
  return (
    <div className={styles.container}>
      <CreateTaskInput />
    </div>
  );
};
