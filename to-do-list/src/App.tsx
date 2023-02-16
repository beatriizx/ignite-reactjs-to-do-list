import { CreateTaskInput } from './components/CreateTaskInput';
import logo from './assets/logo.svg';
import styles from './styles/app.styles.module.scss';
export const App = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <CreateTaskInput />
    </div>
  );
};
