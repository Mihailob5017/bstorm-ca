import React from 'react';
import './delete.style.css';

// Redux
import { useDispatch } from 'react-redux';
import { deleteCompete, setVisibleModal } from '../../redux/actions';

// Code
const DeleteComponent = () => {
	const dispatch = useDispatch();

	// Handlers
	const deleteHandler = () => dispatch(deleteCompete());
	const rejectHandler = () => dispatch(setVisibleModal(''));

	return (
		<div className='delete-component'>
			<h1 className='delete-header'>
				Are you sure you want to delete this todo?
			</h1>
			<div className='delete-btngroup'>
				<button onClick={deleteHandler} className='form-btn btn-delete'>
					Delete Todo
				</button>
				<button onClick={rejectHandler} className='form-btn btn-secondary'>
					Close Modal
				</button>
			</div>
		</div>
	);
};

export default DeleteComponent;
