/** @format */

import { ChangeEventHandler, FormEventHandler } from 'react';
import styles from '../styles/CreateTaskInput.module.scss';

interface CreateTaskInputProps {
	onHandleSubmit: FormEventHandler<HTMLFormElement>;
	onHandleChange: ChangeEventHandler<HTMLInputElement>;
}

export const CreateTaskInput = ({ onHandleSubmit, onHandleChange }: CreateTaskInputProps) => {
	return (
		<div className={styles.formContainer}>
			<form onSubmit={onHandleSubmit}>
				<input
					type='text'
					placeholder='Adicione uma tarefa'
					onChange={onHandleChange}
					required
				/>
				<input
					type='submit'
					value='Criar'
				/>
			</form>
		</div>
	);
};
