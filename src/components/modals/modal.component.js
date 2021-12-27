import React from 'react';
import './modal.style.css';

// Redux
import { useDispatch } from 'react-redux';
import { setVisibleModal } from '../../redux/actions';

// Code
const ModalComponent = ({ children }) => {
	const dispatch = useDispatch();

	const closeModalHanlder = (e) => {
		if (e.target.className === 'modal-wrapper') dispatch(setVisibleModal(''));
	};

	return (
		<div onClick={closeModalHanlder} className='modal-wrapper'>
			<div className='modal-container'>{children}</div>
		</div>
	);
};

export default ModalComponent;
