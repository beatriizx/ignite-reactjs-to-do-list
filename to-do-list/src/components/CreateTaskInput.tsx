import {FormEventHandler } from 'react';
import styles from '../styles/CreateTaskInput.module.scss';

interface CreateTaskInputProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const CreateTaskInput = ({ onSubmit }: CreateTaskInputProps) => {
  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Adicione uma tarefa" />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
